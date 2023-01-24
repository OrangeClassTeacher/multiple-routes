import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            User
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
