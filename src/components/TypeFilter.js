import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

const type = [
  { key: 'studio', text: 'Studio', value: 'studio' },
  { key: 'villa', text: 'Villa', value: 'villa' },
  { key: 'condo', text: 'Condo', value: 'condo' },
  { key: 'apartment', text: 'Apartment', value: 'apartment' }
];

class TypeDropDown extends Component {
  state = {
    dropdownValue: ''
  }

  onTypeChange = (event, { value }) => {
    this.setState({
      dropdownValue: value
    })

  }

  render() {
    console.log(this.state.dropdownValue);

    return (
      <Dropdown upward floating options={type} text="Type" onChange={this.onTypeChange} valuesss={this.state.dropdownValue} />
    )
  }
}

export default TypeDropDown;