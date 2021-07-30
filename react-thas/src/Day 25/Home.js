import React, { useContext } from "react";
import { Login } from "./AuthContext";

const Home = () => {
  const logs = useContext(Login);
  return (
    <>
      <h1>Home</h1>
      <h3>If not logged in cant access Profile, Dashboard</h3>
      {!logs.loading ? (
        <button
          onClick={() => {
            !logs.isAuthenticated ? logs.login() : logs.logout();
          }}
          className={`btn btn-${!logs.isAuthenticated ? "primary" : "danger"}`}
        >
          {!logs.isAuthenticated ? "Login" : "Logout"}
        </button>
      ) : (
        <h5>Loading ...</h5>
      )}
    </>
  );
};

export default Home;
