import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World check"
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
