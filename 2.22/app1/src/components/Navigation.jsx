import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="mr-4">Brand</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link active href="/">
            Home
          </Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
