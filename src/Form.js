import React, { Component } from "react";
import "./App.css"
class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const firstname = form.elements["name"].value;
    const lastname = form.elements["name1"].value;
    this.props.addPerson(firstname, lastname);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
      <table><tbody><tr><td>  <input id="name" type="text" defaultValue="" placeholder="Firstname" /></td><td>
        <input id="name1" type="text" defaultValue="" placeholder="Lastname" /></td><td>
        <input className="btn btn-primary" type="submit"  value="submit" />
        </td></tr></tbody></table>
      </form>
    );
  }
}

export default Form;
