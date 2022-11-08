import * as React from "react";
import { Switch, Route } from "react-router-dom";

export default ({ routes = [], DefaultRoute, stacked }) => {
  return (
    <Switch>
      {routes?.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact}>
          <Main stacked={stacked} label={route.label}>
            <route.main />
          </Main>
        </Route>
      ))}
      {/* default route if no path matches */}
      <Route>
        <Main stacked={stacked} label={DefaultRoute.label}>
          <DefaultRoute.main />
        </Main>
      </Route>
    </Switch>
  );
};

const Main = ({ children, label = "", stacked = false }) => {
  if (stacked)
    return (
      <>
        <main className="relative z-40">
          <div className="pt-8">{children}</div>
        </main>
      </>
    );
  return (
    <main
      className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
      tabIndex="0"
    >
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">{label}</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">{children}</div>
        </div>
      </div>
    </main>
  );
};
