import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useState } from "react";
import Landing from "./components/LandingPage/Landing";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends Component {
  state = {};

  setToken = (value) => {
    this.setState({ token: value });
  };

  render() {
    if (!this.state.token) {
      return <Login setToken={this.setToken} />;
    }

    return (
      <div className="wrapper">
        <Navigation />
        <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
            <Route path="/login">
              <Login
                authenticated={this.state.authenticated}
                redirect_page={"/"}
                onSubmit={this.handleAuthentication}
              />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  handleSubmit = (fields) => {
    console.log(fields);
  };

  handleAuthentication = (fields) => {};
}

export default App;
