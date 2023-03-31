import { Link } from "react-router-dom";
import { NavStyle } from "./style";

const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/festival">
              Festival
            </Link>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
