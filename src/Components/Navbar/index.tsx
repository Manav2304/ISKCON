import React from "react";
import { Link } from "react-router-dom";
import { NavStyle, NavLink } from "./style";
import { Dropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <NavLink>
          <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link " to="/about">
                AboutUs
              </Link>
              <Link className="nav-link" to="/donation">
                Donation
              </Link>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/services-page/life-time-membership">
                    Life Time Membership
                  </Dropdown.Item>
                  <Dropdown.Item href="/services-page/iskcon-youth-forum">
                    Iskcon Youth Forum - IYF
                  </Dropdown.Item>
                  <Dropdown.Item href="/services-page/guest-house">
                    Prabhupada Ashrya Guest House
                  </Dropdown.Item>
                  <Dropdown.Item href="/services-page/gaushala">
                    Goverdhan Gaushala
                  </Dropdown.Item>
                  <Dropdown.Item href="/services-page/deity-worship">
                    Deity Worship
                  </Dropdown.Item>
                  <Dropdown.Item href="/services-page/devotee-kitchen">
                    Devotee Kitchen
                  </Dropdown.Item>
                  <Dropdown.Item href="/services-page/kirtan-at-iskcon">
                    Kirtan At Iskcon
                  </Dropdown.Item>
                  <Dropdown.Item href="/services-page/book-distribution">
                    Book Distribution
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </nav>
        </NavLink>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
