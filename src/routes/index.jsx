import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Products from "../pages/products";
import Completion from "../pages/completion";

export default function Routes() {
  const { CLIENT_NAME } = useSelector((state) => state.main);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/completion">
          {CLIENT_NAME ? <Completion /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}
