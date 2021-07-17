import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ReadPage from "./screens/ReadPage";

export default class MainRouter extends Component {
  state = {
    loggedIn: false,
    restrictedPage: false,
  };
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ReadPage} />
        </Switch>
      </div>
    );
  }
}
