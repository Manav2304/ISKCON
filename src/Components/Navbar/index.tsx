import React from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./style";
import logo from "../../assets/isckonlogo.png";

const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link to="#">Donation</Link>

          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <Link to="#">Services</Link>
        </div>
      </nav>
    </NavStyle>
  );
};

export default NavigationBar;
