import React from "react";

import { useLocation, Outlet, NavLink, Link } from "react-router-dom";

const HeaderLayout = () => {
  const location = useLocation();

  const { pathname } = location;

  // /home

  const splitLocation = pathname.split("/");
  return (
    <>
      {/* <ul>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={splitLocation[1] === "about" ? "active" : ""}>
          <Link to={`/about/${2}`}>About</Link>
        </li>
        <li className={splitLocation[1] === "service" ? "active" : ""}>
          <Link to="/service/inner">Service</Link>
        </li>
      </ul> */}

      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "nav-item")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/service"
          >
            Service
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default HeaderLayout;
