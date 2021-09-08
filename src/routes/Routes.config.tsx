import React, { lazy } from "react";
import { Routes } from "./routes-constants";

const Landing = lazy(() => import("../pages/Auth/Landing"));
const Dashboard  = lazy(() => import("../pages/App/Dashboard"));

export interface RoutesInterface {
  path: string;
  exact?: boolean;
  isPrivate: boolean;
  component: React.LazyExoticComponent<() => React.ReactElement>;
}

const AppRoutes: RoutesInterface[] = [
  {
    path: "/",
    exact: true,
    isPrivate: false,
    component: Landing,
  },
  {
    path: Routes.Dashboard,
    exact: true,
    isPrivate: true,
    component: Dashboard,
  }
];

export { AppRoutes };
