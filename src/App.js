import React from "react";
import PropTypes from "prop-types";
import { useToasts } from "react-toast-notifications";
import { Layout } from "./layout";
import { Authenticate } from "./components/general";
import history from "./history";

import "./index.css";
import { ScrollChangerProvider } from "./components/ScrollChanger";

const App = ({ match, location }) => {
  const { state } = location;
  const { addToast } = useToasts();
  React.useEffect(() => {
    if (state?.welcome) {
      addToast("Welcome!", { appearance: "success", autoDismiss: true });
      history.replace("/"); // that's an hack to remove route's state
    }
  }, []);
  return (
    <div className="main">
      <Authenticate>
        <ScrollChangerProvider>
          <Layout match={match} location={location} />
        </ScrollChangerProvider>
      </Authenticate>
    </div>
  );
};
App.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
