import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 bg-red-100"></div>
      <div className="w-1/2 flex justify-center items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/page2">Study</NavLink>
        <NavLink to="/page2">Experience</NavLink>
        <NavLink to="/page3">Contact</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
