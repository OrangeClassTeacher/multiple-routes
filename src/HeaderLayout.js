import React from "react";

import { Outlet, NavLink } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about/2"
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
