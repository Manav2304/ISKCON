import { Link } from "react-router-dom";
import { NavStyle } from "./style";
import { Dropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Media
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/media">Live Darshan</Dropdown.Item>
                <Dropdown.Item href="">Kirtan & Lecture</Dropdown.Item>
                <Dropdown.Item href="">Daily Singar Darshan</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
