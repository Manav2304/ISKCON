import { Link } from "react-router-dom";
import { NavStyle } from "./style";
import { routes } from "../../routes";

export const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="nav-link" to={routes.donation}>
              Donation
            </Link>
            <Link className="nav-link" to={routes.home}>
              Home
            </Link>
            <Link className="nav-link" to={routes.festival}>
              Festival
            </Link>
            <Link className="nav-link" to={routes.contact}>
              Contact
            </Link>
            <Link className="nav-link" to={routes.visitUs}>
              Visit Us
            </Link>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};
