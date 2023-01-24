import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [loca, setLoca] = useState("");
  console.log(window.location);

  const { pathname } = window.location;

  const linkName = pathname.split("/");

  console.log(linkName);

  return (
    <div>
      <ul>
        <li>
          <Link to="/" className={linkName[1] == "" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={linkName[1] == "about" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/service"
            className={linkName[1] == "service" ? "active" : ""}
          >
            Service
          </Link>
        </li>
      </ul>
    </div>
  );
}
