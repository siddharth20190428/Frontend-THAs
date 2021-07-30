import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Profile from "./Profile";
import AuthContext from "./AuthContext";

const Website = () => {
  return (
    <Router>
      <AuthContext>
        <div className="boot vh-100">
          <Header />
          <div className="d-flex flex-column justify-content-center align-items-center h-75">
            <Switch>
              <Route path="/day25/about" component={About} />
              <Route path="/day25/profile" component={Profile} />
              <Route path="/day25/dashboard" component={Dashboard} />
              <Route exact path="/day25" component={Home} />
            </Switch>
          </div>
        </div>
      </AuthContext>
    </Router>
  );
};

export default Website;
