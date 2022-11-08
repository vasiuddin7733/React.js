import React from "react";

export const LayoutCenterWithoutMargins = ({
  children,
  hasGreenGradient = false,
  layoutBackgroundColor = "",
}) => {
  let gradientClass = hasGreenGradient
    ? "bg-gradient-to-l from-[#1E8377] via-green to-[#003C32] text-white"
    : "";
  gradientClass = layoutBackgroundColor + gradientClass;
  return (
    <div className={`flex items-center justify-center ${gradientClass}`}>
      <div className="w-full xl:w-2/3">{children}</div>
    </div>
  );
};
