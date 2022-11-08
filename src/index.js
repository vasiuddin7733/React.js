import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/client";
import { ToastProvider } from "react-toast-notifications";
import { Route, Router, Switch } from "react-router-dom";
import { apolloClient } from "./apollo";
import "./index.css";
import App from "./App";
// import { Login } from "./components";
import { ErrorBoundary, ErrorPage } from "./components/general";
import registerServiceWorker from "./registerServiceWorker";
import history from "./history";
import ROUTES_SETTINGS from "./settings/routes-resolvers.json";

const { CLIENT: { ROUTES: { LOGIN } = {} } = {} } = ROUTES_SETTINGS;

ReactDOM.render(
  <ToastProvider autoDismissTimeout={3000}>
    <ApolloHooksProvider client={apolloClient}>
      <ErrorBoundary>
        <Router history={history}>
          <div className="">
            <Switch>
              {/* <Route exact path={LOGIN} component={Login} /> */}
              <Route exact path="/error-page/:error" component={ErrorPage} />
              <Route path="/" component={App} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </Router>
      </ErrorBoundary>
    </ApolloHooksProvider>
  </ToastProvider>,
  document.getElementById("root"),
);
registerServiceWorker();
