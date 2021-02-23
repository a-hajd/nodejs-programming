import React, { Component } from "react";

class Greeting extends Component {
  state = { name: "Armin Hajdarevic" };
  render() {
    return <div>{this.state.name}</div>;
  }
}

export default Greeting;
