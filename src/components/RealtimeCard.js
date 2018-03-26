import React, { Component } from 'react';
import StaticMap, {Marker} from 'react-map-gl'

import BusIcon from 'material-ui-icons/DirectionsBus'
import LiveIcon from 'material-ui-icons/SpeakerPhone'
import ScheduleIcon from 'material-ui-icons/Schedule'

import { Card, CardContent, CardMedia } from 'material-ui';

import { Link } from 'react-router-dom'

import {defaultMapStyle} from '../style.js';
import Helpers from '../helpers'
import Stops from '../data/stops'
// import Schedules from '../data/schedules'

const styles = {
    prediction: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '.8em',
        opacity: '.5'
    },
    predictionIcon: {
        margin: '0em .25em',
        width: '1em'
    },
    ahead: {
        color: 'darkgreen'
    },
    behind: {
        color: 'darkred'
    }
}

class RealtimeCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allData: {},
            tripData: null,
            fetched: false
        }
    }

    fetchData() {
        fetch(`${Helpers.endpoint}/trip-details/${this.props.trip}.json?key=BETA&includeStatus=true&includePolylines=false`)
        .then(response => response.json())
        .then(d => {
            console.log(d)
            this.setState({ 
                tripData: d.data.entry.status,
                allData: d,
                fetched: true
            })
        })
    }

    componentDidMount() {
        this.fetchData()
        this.interval = setInterval(() => this.fetchData(), 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    computeStopsAway(current, target) {
        const stopOrder = this.state.allData.data.references.stops.map(s => s.id.slice(5,))
        const currentPosition = stopOrder.indexOf(current) 
        const targetPosition = stopOrder.indexOf(target)
        console.log(currentPosition, targetPosition)
        return (targetPosition - currentPosition)
      }    
    
    computeTimeAway(current, target) {
        const currentTime = this.state.allData.data.entry.schedule.stopTimes.filter(st => { return st.stopId.slice(5,) === current.toString() })[0] || this.state.allData.data.entry.schedule.stopTimes.slice(1)[0]
        const targetTime = this.state.allData.data.entry.schedule.stopTimes.filter(st => { return st.stopId.slice(5,) === target.toString() })[0]
        console.log(currentTime, targetTime)
        const timeFromTarget = Math.floor((targetTime.departureTime - currentTime.departureTime)/60)
        return timeFromTarget
    }

    render() {
        return (
            this.state.fetched && this.state.tripData ? 
            (<Card style={{minWidth: 320, maxHeight: 500, display: 'flex'}}>
                <CardMedia 
                        image={'something'}
                        component={StaticMap}
                        width={300}
                        height={280}
                        latitude={this.state.tripData.position.lat}
                        longitude={this.state.tripData.position.lon}
                        zoom={14}
                        mapStyle={defaultMapStyle}
                        mapboxApiAccessToken={Helpers.mapboxApiAccessToken} 
                        attributionControl={false}
                        children={[<Marker latitude={this.state.tripData.position.lat} longitude={this.state.tripData.position.lon}>
                                    <BusIcon />
                        </Marker>]}
                        />
                {/* <CardHeader title={`${this.state.tripData.direction} ${this.state.tripData.tripId}`} subheader={`Next stop: ${Stops[this.state.tripData.nextStop.slice(5,)].name}`} /> */}
                <CardContent>
                    {this.state.tripData.nextStop && this.props.stop? 
                    (
                    <div>
                        <p>Arrives here in {this.computeTimeAway(this.state.tripData.nextStop.slice(5,), this.props.stop)} minutes</p>
                        <p>Next stop: <Link to={`/stop/${Stops[this.state.tripData.nextStop.slice(5,)].id}`}>{Stops[this.state.tripData.nextStop.slice(5,)].name}</Link> {this.computeStopsAway(this.state.tripData.nextStop.slice(5,), this.props.stop) > 0 ? `(${this.computeStopsAway(this.state.tripData.nextStop.slice(5,), this.props.stop)} stops away)`: ``} </p>
                    </div>
                    )
                    : ``}
                    {this.state.tripData.predicted 
                        ? <div style={styles.prediction}><LiveIcon style={styles.predictionIcon}/><p>real-time location {this.state.tripData.predicted ? <span style={this.state.tripData.onTime > 0 ? styles.behind : styles.ahead}>{this.state.tripData.onTime} min {this.state.tripData.onTime <= 0 ? 'ahead' : 'behind'}</span>: `` }</p></div>
                        : <div style={styles.prediction}><ScheduleIcon style={styles.predictionIcon}/><p>scheduled location</p></div>}
                        </CardContent>
            </Card>)
            : <Card style={{minWidth: 320, maxHeight: 500}}><CardContent>{this.state.fetched ? `No data available...` : `Loading...`}</CardContent></Card>
        )
    }
}

export default RealtimeCard;