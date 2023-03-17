import React from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./style";
import logo from "../../images/isckonlogo.png";
const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="nav-logo" to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </nav>
    </NavStyle>
  );
};

export default NavigationBar;
