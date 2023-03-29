import { Link } from "react-router-dom";
import { NavStyle, NavLink } from "./style";
import { Dropdown } from "react-bootstrap";

export const NavigationBar = () => {
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
                <Dropdown.Toggle variant="success">
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/services/life-time-membership">
                    Life Time Membership
                  </Dropdown.Item>
                  <Dropdown.Item href="/services/iskcon-youth-forum">
                    Iskcon Youth Forum - IYF
                  </Dropdown.Item>
                  <Dropdown.Item href="/services/guest-house">
                    Prabhupada Ashrya Guest House
                  </Dropdown.Item>
                  <Dropdown.Item href="/services/gaushala">
                    Goverdhan Gaushala
                  </Dropdown.Item>
                  <Dropdown.Item href="/services/deity-worship">
                    Deity Worship
                  </Dropdown.Item>
                  <Dropdown.Item href="/services/devotee-kitchen">
                    Devotee Kitchen
                  </Dropdown.Item>
                  <Dropdown.Item href="/services/kirtan-at-iskcon">
                    Kirtan At Iskcon
                  </Dropdown.Item>
                  <Dropdown.Item href="/services/book-distribution">
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
