import * as React from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export default ({
  location,
  children,
  routes = [],
  logout = () => {},
  user = {},
}) => {
  const [show, setShow] = React.useState({
    button: false,
    mobile: false,
  });
  const { pathname } = location || {};
  const path = pathname === "/" ? routes[0].path : pathname;
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div
        className="fixed inset-0 flex z-40 md:hidden"
        role="dialog"
        aria-modal="true"
      >
        <Transition
          show={show.mobile}
          appear
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            aria-hidden="true"
          />
        </Transition>

        <Transition
          className="w-full"
          show={show.mobile}
          appear
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex-1 h-full flex flex-col max-w-xs w-full bg-primary-700">
            <Transition
              show={show.mobile}
              appear
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="absolute top-0 right-0 -mr-12 pt-2"
                onClick={() => setShow({ ...show, mobile: false })}
              >
                <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Close sidebar</span>
                  <svg
                    className="h-6 w-6 text-white"
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
                </button>
              </div>
            </Transition>

            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/layout/logo.jpg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {routes?.map(route => (
                  <div
                    onClick={() =>
                      setShow({
                        ...show,
                        mobile: false,
                      })
                    }
                    key={route.path}
                    className="sm:-my-px sm:ml-6 sm:flex sm:space-x-8"
                  >
                    <Link
                      to={route.path}
                      className={
                        path === route.path
                          ? "bg-primary-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          : 'text-white hover:bg-primary-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md"'
                      }
                    >
                      {/* {route.icon({ active: path === route.path })} */}
                      {route.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-primary-800 p-4">
              <a href="#" className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src={`https://eu.ui-avatars.com/api/?name=${user?.username ||
                        user?.name}&background=0D8ABC&color=fff`}
                      alt=""
                    />
                  </div>
                  <div className="ml-3 pb-8">
                    <p className="text-base font-medium text-white">
                      {user?.username || user?.name}
                    </p>
                    <p
                      onClick={logout}
                      className="text-sm font-medium text-primary-200 group-hover:text-white"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Transition>
        <div className="flex-shrink-0 w-14" aria-hidden="true" />
      </div>

      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden bg-primary-700 md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="/layout/logo.jpg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {routes?.map(route => (
                  <div
                    key={route.path}
                    className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"
                  >
                    <Link
                      to={route.path}
                      className={
                        path === route.path
                          ? "bg-primary-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                          : "text-white hover:bg-primary-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      }
                    >
                      {/* {route.icon({ active: path === route.path })} */}
                      {route.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-primary-800 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src={`https://eu.ui-avatars.com/api/?name=${user?.username ||
                        user?.name}&background=0D8ABC&color=fff`}
                      alt=""
                    />
                  </div>
                  <div className="ml-3 p-8">
                    <p className="text-sm font-medium text-white">
                      {user?.username || user?.name}
                    </p>
                    <p
                      onClick={logout}
                      className="text-xs font-medium text-primary-200 group-hover:text-white"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div
          onClick={() => setShow({ ...show, mobile: true })}
          className={`md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 ${
            show.mobile ? "" : "z-50"
          }`}
        >
          <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
            <span className="sr-only">Open sidebar</span>
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
