import * as React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import AuthenticatedLayout from "../layout/authenticated-layout";
import { AppRoutes } from "../routes/Routes.config";

function AuthenticatedApp() {

  return (
    <Router>
      <AuthenticatedLayout>
        <Routes />
      </AuthenticatedLayout>
    </Router>
  );
}

function Routes() {
  const privateRoutes = AppRoutes.filter((route) => route.isPrivate);
  return (
    <React.Suspense fallback={<p>Dashboard Loader</p>}>
      <Switch>
        {privateRoutes.map(({ path, component: Component }, index) => (
          <Route
            exact
            path={path}
            children={<Component />}
            key={`dashboard-route-${index}`}
          />
        ))}

        <Redirect from="/" to="/app/dashboard" />
      </Switch>
    </React.Suspense>
  );
}

export default AuthenticatedApp;
