import { Link } from "react-router-dom";
import { NavStyle, NavLink } from "./style";
import { routes } from "../../routes";
import { Dropdown } from "react-bootstrap";

export const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <NavLink>
          <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="nav-link" to={routes.donation}>
                Donation
              </Link>
              <Link to={routes.home}>Home</Link>
              <Link className="link" to={routes.festival}>
                Festival
              </Link>
              <Link className="link" to={routes.contact}>
                Contact
              </Link>
              <Link className="link" to={routes.visitUs}>
                Visit Us
              </Link>
              <Link className="link" to={routes.media}>
                Media
              </Link>
              <Dropdown>
                <Dropdown.Toggle variant="success">Services</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href={routes.lifeTimeMembership}>
                    Life Time Membership
                  </Dropdown.Item>
                  <Dropdown.Item href={routes.iskconYouthForum}>
                    Iskcon Youth Forum - IYF
                  </Dropdown.Item>
                  <Dropdown.Item href={routes.guestHouse}>
                    Prabhupada Ashrya Guest House
                  </Dropdown.Item>
                  <Dropdown.Item href={routes.goushala}>
                    Goverdhan Gaushala
                  </Dropdown.Item>
                  <Dropdown.Item href={routes.deityWorship}>
                    Deity Worship
                  </Dropdown.Item>
                  <Dropdown.Item href={routes.devoteeKitchen}>
                    Devotee Kitchen
                  </Dropdown.Item>
                  <Dropdown.Item href={routes.kirtanAtIskcon}>
                    Kirtan At Iskcon
                  </Dropdown.Item>
                  <Dropdown.Item href={routes.bookDistribution}>
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
