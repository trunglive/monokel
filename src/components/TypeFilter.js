import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';



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
      <Dropdown upward floating options={type} text="Type" onChange={this.onTypeChange} />
    )
  }
}

export default TypeDropDown;