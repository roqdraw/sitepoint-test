import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onFormSubmit}>
        <label className="label" htmlFor="name">Counter Name</label>
        <input onChange={this.props.onFormInput} className="input" name="name" type="text" placeholder="Counter Name" />
        <button className="button is-primary">Add</button>
      </form>
    );
  }
}

export default Form;