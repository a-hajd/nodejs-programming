import React, { Component } from "react";

import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    return (
      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <Col lg="8">
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Form.Group>
                <Form.Label>Username: </Form.Label>
                <Form.Control
                  name="username"
                  value={this.state.username}
                  placeholder="Enter username"
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  name="password"
                  value={this.state.password}
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let authEndpoint = "http://localhost:8080/users/login";
    axios
      .post(authEndpoint, {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) this.setState({ token: res.token });
      })
      .catch((err) => console.log(err));

    this.setState({
      username: "",
      password: "",
    });
  };
}

export default Login;
