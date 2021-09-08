import React from "react";
import { loginKey } from "utils/constants";
import storage from "utils/storage";
const loadAuthenticatedApp = () => import("../app/authenticated-app");
const UnauthenticatedApp = React.lazy(() => import("../app/unauthenticated"));
const AuthenticatedApp = React.lazy(loadAuthenticatedApp);

const Layout = () => {
  let token = storage.get(loginKey)
  return (
    <div>{token ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
  );
};

export default Layout;
