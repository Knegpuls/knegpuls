import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/dashboard/dashboard";
import About from "./pages/about/about";
import Notfound from "./pages/error/notfound";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route component={Notfound} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
