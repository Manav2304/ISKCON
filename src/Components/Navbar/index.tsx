import { Link } from "react-router-dom";
import { LinkStyle, NavStyle } from "./style";
const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <LinkStyle>
              <Link to="/">Home</Link>
            </LinkStyle>
            <LinkStyle>
              <Link to="/contact">Contact Us</Link>
            </LinkStyle>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
