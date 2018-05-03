import React, { Component } from 'react';
import {TextField} from 'material-ui';
import PropTypes from 'prop-types';
import Search from 'material-ui-icons/Search';

/** Text input for RouteSearch */
class RouteInput extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '.2em' }}>
        <Search style={{ marginRight: '.25em', width: '1.25em', height: '1.25em' }} />
        <TextField
          label='Search by route name or number'
          placeholder='Try "Woodward", "Dexter", "53", "16"'
          value={this.props.input}
          onChange={this.props.onSearchChange}
          fullWidth 
          style={{ marginBottom: '1em', border: '1px solid #eee' }} />
      </div>
    );
  }
}

RouteInput.propTypes = {
  input: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default RouteInput;
