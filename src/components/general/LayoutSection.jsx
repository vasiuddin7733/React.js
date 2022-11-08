import React from "react";
import SectionTitle from "../form/SectionTitle";

const LayoutSection = ({
  children,
  position = "relative",
  minHeight,
  title,
  titleColor,
  hasGradient = false,
}) => {
  return (
    <div
      style={{ position: position, minHeight: minHeight }}
      className={`break-normal min-h-max max-w-max md:max-w-screen overflow-hidden ${
        hasGradient
          ? "bg-gradient-to-l from-lightgreen via-green to-darkgreen"
          : ""
      }`}
    >
      <SectionTitle title={title} titleColor={titleColor} />
      {children}
    </div>
  );
};

export default LayoutSection;
