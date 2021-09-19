import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Fitur from "./Fitur";
import Bantuan from "./Bantuan";
 
class Dashboard extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Fitur">Fitur</NavLink></li>
            <li><NavLink to="/Bantuan">Bantuan</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Fitur" component={Fitur}/>
            <Route path="/Bantuan" component={Bantuan}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Dashboard;