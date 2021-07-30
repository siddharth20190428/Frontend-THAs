import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Login } from "./AuthContext";

const Header = () => {
  const logs = useContext(Login);

  return (
    <ul
      className="navbar list-unstyled d-flex justify-content-around p-4"
      style={{
        background: "aliceblue",
        border: "1px solid #ddd",
        boxShadow: "0 1px 5px #aaa",
      }}
    >
      <li>
        <Link to="/day25/" className="text-decoration-none">
          Home
        </Link>
      </li>
      <li>
        <Link to="/day25/about" className="text-decoration-none">
          About
        </Link>
      </li>
      <li>
        <Link
          to={`/day25/${!logs.isAuthenticated ? "" : "dashboard"}`}
          className="text-decoration-none"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to={`/day25/${!logs.isAuthenticated ? "" : "profile"}`}
          className="text-decoration-none"
        >
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default Header;
