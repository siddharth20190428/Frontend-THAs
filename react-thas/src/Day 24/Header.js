import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Login } from "./AuthContext";
import "./Website.css";

const Header = () => {
  const logs = useContext(Login);

  return (
    <ul className="navbar">
      <li>
        <Link to="/day24/">Home</Link>
      </li>
      <li>
        <Link to="/day24/about">About</Link>
      </li>
      <li>
        <Link to={`/day24/${!logs.isAuthenticated ? "" : "dashboard"}`}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to={`/day24/${!logs.isAuthenticated ? "" : "profile"}`}>
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default Header;
