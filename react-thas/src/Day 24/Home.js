import React, { useContext } from "react";
import { Login } from "./AuthContext";

const Home = () => {
  const logs = useContext(Login);
  return (
    <div className="center-page height-fit">
      <h1>Home</h1>
      <h3>If not logged in cant access Profile, Dashboard</h3>
      {!logs.loading ? (
        <button
          onClick={() => {
            !logs.isAuthenticated ? logs.login() : logs.logout();
          }}
          className={!logs.isAuthenticated ? "green" : "red"}
        >
          {!logs.isAuthenticated ? "Login" : "Logout"}
        </button>
      ) : (
        <h5>Loading ...</h5>
      )}
    </div>
  );
};

export default Home;
