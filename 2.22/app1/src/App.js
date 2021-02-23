import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Greeting from "./components/Greeting";
import Form from "./components/Form";

import Navbar from "react-bootstrap/Navbar";
import { Nav, Jumbotron } from "react-bootstrap";

class App extends Component {
  state = {};

  handleSubmit = (fields) => {
    console.log(fields);
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>Brand</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar>

        <Jumbotron>
          <h1>This is your landing page.</h1>
          <h4>
            Hello, <Greeting />
          </h4>
        </Jumbotron>

        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
