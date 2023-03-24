import React from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./style";

const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/donation">
              Donation
            </Link>
            <Link className="nav-link" to="#">
              GO SEVA
            </Link>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
