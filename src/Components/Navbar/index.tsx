import React from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./style";
const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="nav-link" to="/Pages/Home">
              Home
            </Link>
            <Link className="nav-link " aria-current="page" to="/Pages/About">
              AboutUs
            </Link>

            <Link className="nav-link" to="Pages/Donation">
              Donation
            </Link>
            <Link className="nav-link" to="#">
              GO SEVA
            </Link>
            <Link className="nav-link" to="Pages/Festival">
              Festival           
            </Link>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
