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
           <Link className="nav-link" to="Pages/Nearby">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Nearby Place
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/Pages/Nearby">
                  Dakor Dham
                </Dropdown.Item>
                <Dropdown.Item href="">
                  Dining Options
                </Dropdown.Item>
                <Dropdown.Item href="">
                  Safety Tips
                </Dropdown.Item>
                <Dropdown.Item href="">
                  Visitor Facility
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Link>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
