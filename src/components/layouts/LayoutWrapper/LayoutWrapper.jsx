import React from "react";

const LayoutWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <div className="max-width-screen overflow-x-hidden">{children}</div>
    </React.Fragment>
  );
};

export default LayoutWrapper;
