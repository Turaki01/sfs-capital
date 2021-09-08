import * as React from "react";
import { UnauthenticatedLayout } from "../layout/unauthenticated-layout";
import { AppRoutes } from "../routes/Routes.config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function UnAuthenticatedApp() {
  const publicRoutes = AppRoutes.filter((route) => !route.isPrivate);
  
  return (
    <Router>
      <UnauthenticatedLayout>
          <Switch>
            {publicRoutes.map(({ component: Component, path }, index) => (
              <Route
                exact
                path={path}
                children={<Component />}
                key={`auth-route-${index}`}
              />
            ))}
          </Switch>
      </UnauthenticatedLayout>
    </Router>
  );
}
