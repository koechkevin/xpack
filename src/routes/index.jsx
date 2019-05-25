import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from "./routes";

const Routes = () => (
  <Switch>
    {
      routes.map((each) => (
        <Route
          key={each.path}
          path={each.path}
          exact
          component={each.component}
        />
      ))
    }
  </Switch>
);

export default Routes;
