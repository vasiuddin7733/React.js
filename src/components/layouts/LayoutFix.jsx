import React from "react";

const LayoutFix = ({ children, title, titleColor, paddingVer }) => {
  return (
    <div className="xl:flex xl:justify-center xl:items-center overflow-hidden">
      <div className={`w-full xl:w-1/2 py-${paddingVer}`}>
        <div
          className={`text-${titleColor} w-full xl:w-1/2 text-white text-2xl md:text-4xl font-bold px-4 py-6 xl:py-12`}
        >
          {title}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutFix;
