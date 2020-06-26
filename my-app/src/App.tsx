import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotFoundPage, LoginPage, DashboardPage } from "pages";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={DashboardPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};
