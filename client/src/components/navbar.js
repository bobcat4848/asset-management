import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"; 

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Import logo from src/images
import logo from "../images/logo.png"
 
// Here, we display our Navbar
const Navbar = () => {
  return (
    <div style={{paddingBottom: 25}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" width="225" height="50"/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/equipment">
                Equipment
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/users" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manage
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><NavLink className="dropdown-item" to="/users">Users</NavLink></li>
                {/*}<li><NavLink className="dropdown-item" to="/item">Item</NavLink></li>{*/}
                <li><hr className="dropdown-divider"/></li>
                <li><NavLink className="dropdown-item" to="/system">System</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
 
export default Navbar;