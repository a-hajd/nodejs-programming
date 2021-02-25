import React, { Component } from "react";

import { Row, Col, Jumbotron } from "react-bootstrap";

class Preferences extends Component {
  state = {};
  render() {
    return (
      <Row className="justify-content-center">
        <Col lg="6">
          <Jumbotron>
            <h2>Preferences</h2>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

export default Preferences;
