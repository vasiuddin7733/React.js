import * as React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useHistory } from "react-router-dom";
import useOnClickOutside from "use-onclickoutside";

export default ({ routes = [], children, user, logout = () => {} }) => {
  // hooks
  const [show, setShow] = React.useState({
    button: false,
    mobile: false,
  });
  const [desktopMenuOpen, setDesktopMenuOpen] = React.useState(false);
  const clickOutSideRef = React.useRef(null);
  useOnClickOutside(clickOutSideRef, () => {
    setDesktopMenuOpen(false);
  });
  const history = useHistory();

  // redirects
  if (
    user?.verified === false &&
    history?.location?.pathname !== "/validation"
  ) {
    history.push("/validation");
  }
  const { pathname } = location || {};
  const path = pathname === "/" ? routes[0].path : pathname;

  return (
    <div className="font-sans text-lg">
      <nav className="w-full border-solid border-b-2 border-gray-200 fixed bg-white z-[999]">
        <div className="w-full xl:w-2/3 mx-auto px-5 xl:px-2">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="w-full flex items-center justify-between">
              <a href={"/"}>
                <div className="flex-shrink-0 flex">
                  <img
                    src="/layout/seiDUAL.svg"
                    className="md:h-14 pr-5 md:pr-4"
                  />
                  <img src="/footer/sen-ias.svg" className="h-8 md:h-12" />
                </div>
              </a>
              <div className="hidden xl:flex items-center">
                <div className="flex">
                  {routes?.map((route, idx) =>
                    route.label !== "Home" &&
                    route.label !== "News Details" &&
                    route.label !== "Presse Details" &&
                    route.label !== "Partner Details" &&
                    route.label !== "Impressum" &&
                    route.label !== "Datenschutz" &&
                    route.label !== "AGB" &&
                    idx <= 5 ? (
                      <Link
                        onClick={() => {
                          setDesktopMenuOpen(false);
                          setShow({ ...show, mobile: !show.mobile });
                        }}
                        key={idx}
                        to={route.path}
                        className={
                          path === route.path
                            ? "block mx-3 py-2 text-base font-medium text-buttonRed border-solid border-b-2 border-buttonRed"
                            : "text-black block mx-3 py-2 text-base font-medium hover:text-buttonRed hover:border-solid hover:border-b-2 hover:border-buttonRed"
                        }
                      >
                        {route.label}
                      </Link>
                    ) : (
                      <Link to="" key={idx} className="hidden"></Link>
                    ),
                  )}
                </div>
                <button
                  onClick={() => {
                    setDesktopMenuOpen(!desktopMenuOpen);
                  }}
                  className=" bg-white inline-flex items-center justify-center pl-2 rounded-md text-black  focus:outline-none focus:ring-offset-gray-800 focus:ring-white relative"
                >
                  <span className="sr-only">Open main menu</span>
                  {desktopMenuOpen ? (
                    <div className="h-9 w-9 rounded-full border-black border-2">
                      <XIcon className="block h-8 w-8" aria-hidden="true" />
                    </div>
                  ) : (
                    <div className="mr-4 xl:mr-0 flex flex-col justify-center items-center">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                      <div className="text-base font-medium">Menü</div>
                    </div>
                  )}
                </button>
                <Transition
                  show={desktopMenuOpen}
                  appear
                  enter="transition-opacity ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="sliderBackdrop top-[7.55rem] h-full w-full fixed left-0 right-0 bottom-0 bg-black bg-opacity-50">
                    <Transition
                      show={desktopMenuOpen}
                      appear
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <div
                        ref={clickOutSideRef}
                        className={
                          'right-0 w-2/5 xl:w-1/5 bg-white fixed h-full overflow-auto"'
                        }
                      >
                        {routes?.map((route, index) =>
                          route.label !== "Home" &&
                          route.label !== "News Details" &&
                          route.label !== "Presse Details" &&
                          route.label !== "Partner Details" &&
                          route.label !== "Impressum" &&
                          route.label !== "Datenschutz" &&
                          route.label !== "AGB" ? (
                            <Link
                              onClick={() => {
                                setDesktopMenuOpen(false);
                                setShow({ ...show, mobile: !show.mobile });
                              }}
                              key={index}
                              to={route.path}
                              className={
                                path === route.path
                                  ? "text-black block px-3 py-2  text-base font-medium text-buttonRed border-solid border-b-2 border-buttonRed"
                                  : "text-black block px-3 py-2  text-base font-medium hover:text-buttonRed hover:border-solid hover:border-b-2 hover:border-buttonRed"
                              }
                            >
                              {route.label}
                            </Link>
                          ) : (
                            <Link
                              to=""
                              key={route.label}
                              className="hidden"
                            ></Link>
                          ),
                        )}
                      </div>
                    </Transition>
                  </div>
                </Transition>
              </div>
            </div>
            <div className="hidden xl:block">
              <div className="ml-4 flex items-center md:ml-6 xl:ml-0">
                <div className="ml-3 xl:ml-0 relative">
                  <Transition
                    show={show.button}
                    appear
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transition ease-in duration-75"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Dropdown
                      logout={logout}
                      callback={() =>
                        setShow({
                          ...show,
                          button: false,
                        })
                      }
                    />
                  </Transition>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex xl:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => setShow({ ...show, mobile: !show.mobile })}
                type="button"
                className="bg-primary-600 inline-flex items-center justify-center p-2 rounded-md text-primary-200 hover:text-white hover:bg-primary-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!show.mobile ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {show.mobile && (
          <div
            className="xl:hidden absolute w-screen h-screen bg-white left-0 right-0 bottom-0 top-[6.65rem]  md:top-[7.55rem]  z-50"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {routes?.map(route =>
                route.label !== "Home" &&
                route.label !== "News Details" &&
                route.label !== "Presse Details" &&
                route.label !== "Partner Details" &&
                route.label !== "Impressum" &&
                route.label !== "Datenschutz" &&
                route.label !== "AGB" ? (
                  <Link
                    onClick={() => setShow({ ...show, mobile: !show.mobile })}
                    key={route.label}
                    to={route.path}
                    className={
                      path === route.path
                        ? "text-black block px-3 py-2 text-base font-medium text-buttonRed  border-solid border-b-2 border-buttonRed"
                        : "text-black block px-3 py-2 text-base font-medium hover:text-buttonRed hover:border-solid hover:border-b-2 hover:border-buttonRed"
                    }
                  >
                    {route.label}
                  </Link>
                ) : (
                  <Link to="" key={route.label} className="hidden"></Link>
                ),
              )}
            </div>
            <div className="pt-4 pb-3 border-t border-primary-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://eu.ui-avatars.com/api/?name=${user?.username ||
                      user?.name}&background=0D8ABC&color=fff`}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-black">
                    {user?.username || user?.name}
                  </div>
                  <div className="text-sm font-medium text-black">
                    {user?.email}
                  </div>
                </div>
              </div>
              <p
                onClick={logout}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary-500 hover:bg-opacity-75"
              >
                Sign out
              </p>
            </div>
          </div>
        )}
      </nav>
      {children}
    </div>
  );
};

const Dropdown = ({ logout = () => {}, callback = () => {} }) => {
  const ref = React.useRef(null);
  const closePanel = () => {
    callback();
  };
  useOnClickOutside(ref, closePanel);
  return (
    <div
      ref={ref}
      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <p
        onClick={logout}
        className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        Logout
      </p>
    </div>
  );
};
