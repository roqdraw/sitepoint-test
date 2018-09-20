import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <form>
        <label className="label" for="name">
          Counter Name
        </label>
        <input className="input" type="text" placeholder="Counter Name" />
        <a class="button is-primary">Add</a>
      </form>
    );
  }
}

export default Form;
