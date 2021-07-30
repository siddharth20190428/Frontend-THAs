import React, { createContext, useState } from "react";

const Login = createContext();

const AuthContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logger = {
    loading,
    isAuthenticated,
    login: () => {
      setLoading(true);
      setTimeout(() => {
        setIsAuthenticated(true);
        setLoading(false);
      }, 1000);
    },
    logout: () => {
      setLoading(true);
      setTimeout(() => {
        setIsAuthenticated(false);
        setLoading(false);
      }, 1000);
    },
  };
  return <Login.Provider value={logger}>{children}</Login.Provider>;
};

export default AuthContext;
export { Login };
