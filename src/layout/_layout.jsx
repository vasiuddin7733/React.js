import * as React from "react";
import useAuth from "../components/general/_use-auth";
import Sidebar from "./_sidebar";
import Stacked from "./_stacked";
import Main from "./_main";
import routes from "./_routes";
import { Footer } from "../components/Footer";

const layout = "stacked"; // sidebar, stacked, single

export default props => {
  const { logout, user = {} } = useAuth() || {};
  if (layout === "sidebar")
    return (
      <Sidebar {...props} routes={routes} logout={logout} user={user}>
        <Main routes={routes} DefaultRoute={routes[0]} />
      </Sidebar>
    );
  if (layout === "stacked")
    return (
      <Stacked {...props} routes={routes} logout={logout} user={user}>
        <Main stacked routes={routes} DefaultRoute={routes[0]} />
        <Footer />
      </Stacked>
    );
  if (layout === "single")
    return <Main routes={routes} DefaultRoute={routes[0]} />;
  return null;
};
