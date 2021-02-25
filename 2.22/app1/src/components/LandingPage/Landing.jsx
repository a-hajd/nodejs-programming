import React, { Component } from "react";

import Greeting from "./Greeting";
import Jumbotron from "react-bootstrap/Jumbotron";

class Landing extends Component {
  state = {};
  render() {
    return (
      <Jumbotron>
        <h1>This is your landing page.</h1>
        <h4>
          Hello, <Greeting />
        </h4>
      </Jumbotron>
    );
  }
}

export default Landing;
