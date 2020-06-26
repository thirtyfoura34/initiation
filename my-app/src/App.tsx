import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { NotFoundPage, LoginPage, DashboardPage } from "pages";

export default () => {
  const [authToken, setAuthToken] = useState("");

  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginPage setAuthToken={setAuthToken} authToken={authToken} />
          </Route>
          <Route path="/dashboard" exact>
            <DashboardPage setAuthToken={setAuthToken} authToken={authToken} />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
};
