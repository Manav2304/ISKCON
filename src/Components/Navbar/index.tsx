import { Link } from "react-router-dom";
import { NavStyle } from "./style";
const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link " aria-current="page" to="/about">
              AboutUs
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-link" to="#">
              GO SEVA
            </Link>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
