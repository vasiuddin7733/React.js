import React from "react";

const SectionSubTitle = ({
  subTitle,
  hasPadding = true,
  cssClasses,
  subTitleColor = "black",
  hasCenter = false,
  hasRight = false,
  isUnderlined = false,
}) => {
  const padding = hasPadding ? "px-5 xl:px-0 py-2 sm:py-3 lg:py-4 xl:py-5" : "";
  const center = hasCenter ? "sm:text-center" : "";
  const right = hasRight ? "sm:text-right" : "";
  return (
    <h3
      className={`${padding} ${center} ${right} ${cssClasses} text-${subTitleColor} break-normal font-semibold sm:font-bold text-xl sm:text-2xl`}
    >
      {subTitle}
      {isUnderlined ? (
        <div className="pb-1">
          <hr className="text-white border-2 w-1/5" />
        </div>
      ) : null}
    </h3>
  );
};

export default SectionSubTitle;
