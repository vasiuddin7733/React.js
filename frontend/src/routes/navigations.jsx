import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/page2">About</NavLink>
      <NavLink to="/page3">Contact</NavLink>
    </div>
  );
};

export default Navigation;
