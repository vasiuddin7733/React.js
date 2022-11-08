import React from "react";
import  SectionTitle  from "../Titles/SectionTitle";

export const LayoutCenter = ({
  children,
  title,
  hasGreenGradient = false,
  fieldFirst,
  fieldSecond,
  hasPadding = true,
  hasCenter = false,
  hasRight = false,
  gradientStart = "l",
  cssClasses = "",
  titleColor = "white",
  firstCssClass,
  secondCssClass,
}) => {
  const padding = hasPadding
    ? "px-5 xl:px-0 py-2  sm:py-3 lg:py-4 xl:py-5"
    : "";
  const gradientClass = hasGreenGradient
    ? `bg-gradient-to-${gradientStart} from-[#1E8377] via-green to-[#003C32] text-white`
    : "";

  return (
    <div className={`xl:flex items-center  ${gradientClass} ${cssClasses}`}>
      <div className={`hidden xl:inline-block xl:w-1/6 ${firstCssClass}`}>
        {fieldFirst}
      </div>
      <div className={`w-full xl:w-2/3 ${padding} `}>
        {title && (
          <SectionTitle
            title={title}
            titleColor={titleColor}
            hasCenter={hasCenter}
            hasRight={hasRight}
          />
        )}

        {children}
      </div>
      <div className={`hidden xl:inline-block xl:w-1/6 ${secondCssClass}`}>
        {fieldSecond}
      </div>
    </div>
  );
};
