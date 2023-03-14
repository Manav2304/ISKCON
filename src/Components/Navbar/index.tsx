import React from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./style";
const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          {/* <Link className="nav-link" to="/">
            Home
          </Link> */}

          <Link className="nav-logo" to="/home">
            <img
              src="https://iskconvrindavan.com/_next/image?url=%2Fimages%2Flogo-black.png&w=1920&q=75"
              alt="Logo"
            />
          </Link>

          <Link className="nav-link" to="/donation">
            Donation
          </Link>
        </div>
      </nav>
    </NavStyle>
  );
};

export default NavigationBar;
