import React from "react";

const SectionTitle = ({
  title,
  titleColor = "black",
  hasCenter = false,
  hasRight = false,
  hasPadding = true,
  cssClasses = "",
}) => {
  const center = hasCenter ? "sm:text-center" : "";
  const right = hasRight ? "sm:text-right" : "";
  const padding = hasPadding ? "px-5 xl:px-0 py-2 sm:py-3 lg:py-4 xl:py-5" : "";
  return (
    <h2
      className={`${padding} ${center} ${right} ${cssClasses} text-${titleColor} w-full text-2xl sm:text-3xl font-bold sm:font-extrabold`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
