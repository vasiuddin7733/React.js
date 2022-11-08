import React from "react";

export const LayoutWithOpacity = ({ children }) => {
  return (
    <div className={"xl:flex xl:items-center xl:justify-center xl:py-20"}>
      <div className={"w-full xl:w-2/3  xl:backgroundOpacity"}>{children}</div>
    </div>
  );
};
