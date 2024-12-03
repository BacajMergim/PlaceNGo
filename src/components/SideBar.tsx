import { Link, useLocation } from "react-router-dom";
import DashboardLogo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Sidebar = () => {
  const [iconDark, setIconDark] = useState<String | undefined>(undefined);
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();
  const paths = location.pathname;

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      <div>
        <FontAwesomeIcon
          onClick={handleShowSideBar}
          icon={faBars}
          className={`m-4 mt-5 fixed ${showSideBar ? "hidden" : ""}`}
          size={"2xl"}
        />
      </div>
      <div
        onClick={handleShowSideBar}
        className={`${
          !showSideBar ? "sm:hidden sm:z-20" : ""
        }  sm:fixed  sm:inset-0 sm:z-50 sm:bg-black sm:bg-opacity-50`}
      >
        <ul
          onClick={handleClick}
          className="flex flex-col content-between sm:-z-40 bg-blue-darker rounded-r-lg fixed w-[7rem]  menu pb-6 pl-2 "
        >
          <Link to="/">
            <img
              className="p-4 mt-4 pr-4 mb-8"
              src={DashboardLogo}
              alt="Dashboard Logo"
            />
          </Link>
          <div className={`h-screen  flex-col mb-10 ${true ? `flex` : ` `}`}>
            <Link to={"Home"}>
              <li
                onMouseEnter={() => {
                  setIconDark("Home");
                }}
                onMouseLeave={() => {
                  setIconDark(undefined);
                }}
                className={`my-4 !py-3 xlg:!py-1 ${
                  paths.startsWith("/Home") ? "active" : ""
                }`}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faHome}
                    size={"2xl"}
                    color={
                      iconDark === "Home" || paths.startsWith("/Home")
                        ? ""
                        : "white"
                    }
                    className="p-4 mt-2 pl-10 mb-2 "
                  />
                </div>
              </li>
            </Link>
            <Link to={`Booking`}>
              <li
                onMouseEnter={() => {
                  setIconDark("Booking");
                }}
                onMouseLeave={() => {
                  setIconDark(undefined);
                }}
                className={`my-4 !py-3 xlg:!py-1 ${
                  paths.includes("/Booking") ? "active" : ""
                }`}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    size={"2xl"}
                    color={
                      iconDark === "Booking" || paths.includes("/Booking")
                        ? ""
                        : "white"
                    }
                    className="p-4 mt-2 pl-10 mb-2"
                  />
                </div>
              </li>
            </Link>
            <Link to={`Contact`}>
              <li
                onMouseEnter={() => {
                  setIconDark("Contact");
                }}
                onMouseLeave={() => {
                  setIconDark(undefined);
                }}
                className={`my-4 !py-3 xlg:!py-1 ${
                  paths.includes("Contact") ? "active" : ""
                }`}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={"2xl"}
                    color={
                      iconDark === "Contact" || paths.includes("Contact")
                        ? ""
                        : "white"
                    }
                    className="p-4 mt-2 pl-10 mb-2"
                  />
                </div>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};
