import React from "react";
import { Link } from "react-router-dom";
import { NavStyle, Image } from "./style";
import logo from "../../assets/isckonlogo.png";

const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="#">Donation</Link>
          <Image>
            <Link className="nav-logo" to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Image>
          <Link to="#">Services</Link>
        </div>
      </nav>
    </NavStyle>
  );
};

export default NavigationBar;
