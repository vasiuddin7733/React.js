import React from "react";

const SectionSubHeader = ({
  header,
  hasPadding = true,
  hastextGradient = true,
  extraClass,
  alignment = "text-right  xl:text-left",
}) => {
  const padding = hasPadding ? "px-5 xl:px-0 py-2 sm:py-3 lg:py-4 xl:py-5" : "";
  const textGradiant = hastextGradient
    ? "bg-clip-text text-transparent bg-clip bg-gradient-to-l from-[#1E8377] to-[#003C32]"
    : "";
  return (
    <h1
      className={`break-normal ${padding} ${textGradiant} ${extraClass} ${alignment} w-full text-2xl sm:text-3xl xl:text-5xl  font-extrabold xl:font-black
     `}
    >
      {header}
    </h1>
  );
};

export default SectionSubHeader;
