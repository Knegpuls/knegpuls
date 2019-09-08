import React from "react";
import { Route, Link } from "react-router-dom";
import Overview from "./overview";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <ul>
          <li>
            <Link to="/dashboard/overview">Overview</Link>
          </li>
        </ul>
        <Route path="/dashboard/overview" component={Overview} />
      </div>
    );
  }
}
export default Dashboard;
