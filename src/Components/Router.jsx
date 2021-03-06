import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={App} path="/" exact />
        <Route component={Recipe} path="/recipe/:id" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
