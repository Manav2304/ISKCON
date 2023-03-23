import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavStyle } from "./style";
import logo from "../../assets/images/isckonlogo.png";
import { socialmediaIcon } from "../../Components/Navbar/Dropdown/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import { DropDown } from "./Dropdown/index";
const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container">
          <DropDown />
          <NavLink to="#">GO Seva</NavLink>
          <Link to="#">Festival</Link>
          <Link to="#">Services</Link>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="#">Conatact</Link>
          <Link to="#">Media</Link>
          <Link to="/donation">Donation</Link>
          <div>
            {socialmediaIcon.map((item) => (
              <a key={item.name} href={item.href} className="me-4 text-reset">
                <MDBIcon fab icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </NavStyle>
  );
};

export default NavigationBar;
