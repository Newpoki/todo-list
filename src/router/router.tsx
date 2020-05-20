import React from "react";
import { Switch, Route } from "react-router-dom";

import { App } from "./app/app";
import { OnlyPrivateRoute } from "./only-private-route";
import { OnlyPublicRoute } from "./only-public-route";
import { Login } from "./login/login";
import { Unknown } from "./unknown/unknown";

export const Router = () => {
  return (
    <Switch>
      <OnlyPublicRoute path="/login" render={(props) => <Login {...props} />} />

      <OnlyPrivateRoute path="/" render={(props) => <App />} />
      <Route component={Unknown} />
    </Switch>
  );
};
