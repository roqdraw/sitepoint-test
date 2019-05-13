import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var value = this.props.value
    var name = this.props.name

    return <input 
              type="number" 
              pattern="[0-9]*" 
              inputmode="numeric"
              onChange={() => this.props.onCounterChange(name)}
              defaultValue={value}
              />;
  }
}

export default Counter;