import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import RouteNames from "constants/routeNames";
import ProfileDetails from "pages/ProfileDetails";

import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => (
  <Switch>
    <Route path={RouteNames.DASHBOARD} exact component={Dashboard} />
    <Route
      path={`${RouteNames.PROFILES}/:username`}
      component={ProfileDetails}
    />
    <Redirect path="*" to="/" />
  </Switch>
);

export default Routes;
