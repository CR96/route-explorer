import React, { Component } from 'react';

import StopLink from './StopLink'
import LineLink from './LineLink'

class StopsNearLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      fetchedData: false
    }
  }

  fetchData() {
    fetch(`https://ddot-proxy-test.herokuapp.com/api/where/stops-for-location.json?key=BETA&radius=500&lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}`)
    .then(response => response.json())
    .then(d => {
      console.log(d)
      this.setState({
        data: d, 
        fetchedData: true
      })
    })
    .catch(e => console.log(e));
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    let data = this.state.fetchedData ? this.state.data : null

    return (
      <div>
        <div>
          <h4>Nearby routes:</h4>
          <div className="h5 overflow-scroll">
            {this.state.fetchedData ? data.data.references.routes.map(r => (
              <div className="bg-light-gray ma2 pa2">
                <LineLink id={parseInt(r.shortName, 10)}/>
              </div>
            )) : ``}
          </div>
        </div>
        <div>
          <h4>Nearby stops:</h4>
          <div className="h4 overflow-scroll">
            {this.state.fetchedData ? data.data.list.map(a => (
              <StopLink id={a.id.slice(5,)} />
            )) : ``}
          </div>
        </div>
      </div>
    )
  }
}

export default StopsNearLocation
