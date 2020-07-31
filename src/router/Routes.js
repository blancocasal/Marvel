import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import AvengersPortal from "../components/AvengersPortal";
import InfoAvenger from "../components/InfoAvenger";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/AvengersPortal">
        <AvengersPortal />
      </Route>
      <Route exact path="/InfoAvenger/:id">
        <InfoAvenger />
      </Route>
    </Switch>
  );
}

export default Routes;
