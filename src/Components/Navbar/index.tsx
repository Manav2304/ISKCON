import React from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./style";
const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="nav-link" to="/Pages/Home">
            Home
          </Link>

          <Link className="nav-link" to="#">
            GO SEVA
          </Link>
          <Link className="nav-logo" to="/Pages/Home">
            <img
              src="https://iskconvrindavan.com/_next/image?url=%2Fimages%2Flogo-black.png&w=1920&q=75"
              alt="Logo"
            />
          </Link>

          <Link className="nav-link" to="/Pages/Donation">
            Donation
          </Link>

          <Link className="nav-link" to="/Pages/Api">
            check
          </Link>
        </div>
      </nav>
    </NavStyle>
  );
};

export default NavigationBar;
