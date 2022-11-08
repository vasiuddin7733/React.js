import React from "react";

const KontaktForm = ({
  imgUrl,
  title,
  name,
  email,
  tel,
  hasHeader = true,
  hasIframe = true,
  frame,
}) => {
  const header = hasHeader ? "Kontakt" : "";
  const iframe = hasIframe ? (
    <div className="xl:w-1/2  bg-gradient-to-tr from-pink to to-lightgreen flex justify-center xl:items-center h-80vh sm:h-120 xl:h-140">
      <div className="xl:w-3/4 flex h-90vh md:h-120">
        <iframe
          className="mj-w-res-iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={frame}
          width="100%"
        ></iframe>
      </div>
    </div>
  ) : (
    ""
  );

  return (
    <div className="break-normal w-full flex flex-col xl:justify-center xl:items-center text-white xl:flex-row">
      {iframe}
      <div
        className={`${
          hasIframe
            ? "xl:w-1/2 bg-gradient-to-r from-[#1E8377] to-[#003C32] flex flex-col justify-center items-center h-80vh sm:h-120 xl:h-140"
            : "xl:w-full flex flex-col justify-center items-center"
        }  `}
      >
        <div className="pb-2 px-5 md:p-4 xl:p-6 text-center text-xl  sm:text-2xl md:text-3xl xl:text-4xl font-black">
          {header}
        </div>
        <div className="pb-5 px-5 md:p-4 xl:p-6 sm:w-full text-center md:text-lg xl:text-2xl xl:pb-12 font-bold">
          {title}
        </div>
        <div className="backgroundOpacity">
          <div className="flex flex-col sm:flex-row sm:items-end">
            <div className="w-full sm:w-2/5">
              <img src={imgUrl} className="w-full h-full"></img>
            </div>
            <div className="sm:w-3/5 p-1 md:p-2 xl:p-4">
              <div className="p-1 md:text-xl xl:text-2xl font-bold">{name}</div>
              <div className="p-1 md:text-lg xl:text-xl">{email}</div>
              <div className="p-1 md:text-lg xl:text-xl">{tel}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktForm;
