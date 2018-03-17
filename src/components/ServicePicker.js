import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class ServicePicker extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      selectedOption: props.currentSvc 
    }
  }

  render() {
    return (
      <RadioButtonGroup onChange={this.props.onChange}>
        {this.props.services.map(s => (
          <RadioButton value={s} label={_.capitalize(s)} />
        ))}
      </RadioButtonGroup>
    )
  }
}

ServicePicker.propTypes = {
  services: PropTypes.array,
  currentSvc: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default ServicePicker;
