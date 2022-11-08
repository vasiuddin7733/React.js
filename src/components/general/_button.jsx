import React from "react";

const Button = ({
  onClick,
  isBorderButton = false,
  label = "Jetzt bestellen",
  url = "#",
  isExternalLink = true,
  cssClasses,
  hasMargin = true,
  isDownloadable = false,
}) => {
  const margin = hasMargin ? "py-4 md:py-0" : "";
  return isBorderButton ? (
    <a
      onClick={onClick}
      href={url}
      target={isExternalLink ? "_blank" : "_self"}
      rel="noreferrer"
      download={isDownloadable}
    >
      <div className={`w-full ${margin} ${cssClasses}`}>
        <button
          className={
            "w-full px-4 py-2 text-lg sm:text-xl  font-bold text-red-600 border-2 border-red rounded-full"
          }
        >
          {label}
        </button>
      </div>
    </a>
  ) : (
    <a href={url} target={isExternalLink ? "_blank" : "_self"} rel="noreferrer">
      <div className={`w-full ${margin} ${cssClasses}`}>
        <button
          className={
            "w-full py-2 px-4 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-[#C92F77] to-[#F22828] rounded-full"
          }
        >
          {label}
        </button>
      </div>
    </a>
  );
};
export default Button;
