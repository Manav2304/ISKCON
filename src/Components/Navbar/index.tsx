import { Link } from "react-router-dom";
import { NavStyle } from "./style";
const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
