import React from "react";

const LayoutWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <div className="break-normal text-base max-width-screen overflow-x-hidden overflow-y-hidden">
        {children}
      </div>
    </React.Fragment>
  );
};

export default LayoutWrapper;
//      <LayoutTopBar />
