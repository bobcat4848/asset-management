import React from "react";
import { Redirect, useHistory } from 'react-router';
import { useEffect, useState } from 'react';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"; 

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Import logo from src/images
import logo from "../images/rasl_logo.png"


// Here, we display our Navbar
const Navbar = ({ loggedIn }) => {
  return (
    <div style={{paddingBottom: 25}}>
      <nav id="navBar" className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/home">
          <img src={logo} alt="Logo of RASL-Robotics and Autonomous Systems Lab" 
                          width="130" height="60"
                          />
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
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
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Add Item
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/system">
                System
              </NavLink>
            </li>
            {loggedIn && 
              <li className="nav-item" id="signout">
                <NavLink onClick={deleteSignOut} className="nav-link" to="/login">
                  Sign Out
                </NavLink>
              </li>
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

function deleteSignOut() {
  localStorage.clear("token");
  var elem = document.getElementById("signout");
  elem.style.display = "none";
}

export default Navbar;