import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var value = this.props.value
    var object = this.props.object
    var event = this.props.event

    return <input 
              type="number" 
              pattern="[0-9]*" 
              inputMode="numeric"
              onChange={ (event) => this.props.onCounterChange(event, object)}
              defaultValue={value}
              />;
  }
}

export default Counter;