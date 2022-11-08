import React from "react";
import { LayoutCenterWithoutMargins, LayoutCenter } from "../layouts";

const Footer = () => {
  return (
    <div className="break-normal">
      <LayoutCenterWithoutMargins layoutBackgroundColor="bg-gray-500">
        <div className="my-6 md:my-8 lg:my-10 xl:my-20 text-white p-5 text-base space-y-5 xl:flex">
          <div className="w-full sm:flex sm:justify-between space-y-5">
            <div className="w-full sm:w-1/3 xl:w-2/3 space-y-5 pb-5">
              <div className="w-full flex justify-center sm:justify-start xl:w-1/2">
                <div className="w-2/5">
                  <img src="/footer/seidual-logo-white.svg" className="w-2/3" />
                </div>
                <div className="w-2/5">
                  <img src="/footer/logo-berlin.svg" className="w-full" />
                </div>
              </div>
              <div>
                <p className="w-full lg:w-2/3">
                  Die Berliner Ausbildungsinitiative #seiDUAL wird gefördert von
                  der Berliner Senatsverwaltung für Integration, Arbeit und
                  Soziales.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/4 xl:w-1/2 flex justify-center pb-5 xl:hidden">
              <img src="/lehrkrafte/Datenschutz_logo.svg" />
            </div>
          </div>
          <div className="w-full sm:w-1/4  pb-5 hidden xl:inline-block xl:w-1/5">
            <a
              href="https://datenschutz-werk.de/datenschutz-siegel-website/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/lehrkrafte/Datenschutz_logo.svg" />
            </a>
          </div>
          <div className="md:w-full xl:w-1/5  flex flex-col justify-start items-center xl:pt-5">
            <div className="mb-4">#seiDUAL folgen:</div>
            <div className="flex space-x-2 lg:space-x-4 xl:space-x-6 lg:p-2">
              <div>
                <a
                  href="https://www.facebook.com/seiDUAL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/lehrkrafte/Facebook_logo.svg"
                    className="bg-transparent"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCkIt8cPluCMnsaxOmHHJIMQ/featured"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/lehrkrafte/Youtube_logo.svg"
                    className="bg-transparent"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/sei_dual/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/lehrkrafte/Instagram_logo.svg"
                    className="bg-transparent"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/sei_dual"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/lehrkrafte/Twitter_logo.svg"
                    className="bg-transparent"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </LayoutCenterWithoutMargins>
      <LayoutCenter hasPadding={false}>
        <div className="md:flex md:justify-between text-gray-500 p-5 md:p-6 xl:p-0">
          <div className="py-2 md:py-4 text-center">
            © 2022 #seiDUAL – Die Berliner Ausbildungsinitiative
          </div>
          <div className="flex justify-between space-x-10 py-2 md:py-4">
            <div>
              <a className="" href="/agb">
                AGB
              </a>
            </div>
            <div>
              <a className="" href="/datenschutz">
                Datenschutz
              </a>
            </div>
            <div>
              <a className="" href="/impressum">
                Impressum
              </a>
            </div>
          </div>
        </div>
      </LayoutCenter>
    </div>
  );
};

export default Footer;
