import { Link } from "react-router-dom";
import FestivalDropdown from "../../Pages/Festival/Dropdown";
import { NavStyle } from "./style";
const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="nav-link" to="/Home">
              Home
            </Link>
            <Link className="nav-link" to="/Festival">
              <FestivalDropdown />
            </Link>    
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
