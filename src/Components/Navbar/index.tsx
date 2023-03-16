import React from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./style";
import { Dropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link " to="/About">
              AboutUs
            </Link>

            <Link className="nav-link" to="/Donation">
              Donation
            </Link>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Services
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/Pages/Servicespage/LifeTimeMembership">
                  Life Time Membership{" "}
                </Dropdown.Item>
                <Dropdown.Item href="/Pages/Servicespage/IskconYouthForum">
                  Iskcon Youth Forum - IYF
                </Dropdown.Item>
                <Dropdown.Item href="/Pages/Servicespage/GuestHouse">
                  Prabhupada Ashrya Guest House
                </Dropdown.Item>
                <Dropdown.Item href="/Pages/Servicespage/Gaushala">
                  Goverdhan Gaushala
                </Dropdown.Item>
                <Dropdown.Item href="/Pages/Servicespage/DeityWorship">
                  Deity Worship
                </Dropdown.Item>
                <Dropdown.Item href="/Pages/Servicespage/DevoteeKitchen">
                  Devotee Kitchen
                </Dropdown.Item>
                <Dropdown.Item href="/Pages/Servicespage/KirtanAtIskcon">
                  Kirtan At Iskcon
                </Dropdown.Item>
                <Dropdown.Item href="/Pages/Servicespage/BookDistribution">
                  Book Distribution
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
