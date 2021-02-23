import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      username: "",
      password: "",
    });
    // console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={(e) => this.handleChange(e)}
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
