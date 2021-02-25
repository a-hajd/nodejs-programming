import React, { Component } from "react";

import { Row, Col, Jumbotron } from "react-bootstrap";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Row className="justify-content-center">
        <Col lg="6">
          <Jumbotron>
            <h2>Dashboard</h2>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

export default Dashboard;
