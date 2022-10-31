import React from "react";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <h1>Log in</h1> },
  {
    path: "/app",
    key: "APP",
    component: () => <h1>App</h1>,
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: "/app/start",
        key: "START_PAGE",
        exact: true,
        component: () => <h1>App Page</h1>,
      },
    ],
  },
];

export default ROUTES;