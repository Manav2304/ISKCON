import { NavStyle, StyledLink, ImgStyle } from "./style";
import { DropDown } from "../Dropdown";
import {
  dropdownDonationInfo,
  dropdownMediaInfo,
  socialMediaIcon,
} from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/iskcon-logo.png";
import {
  dropdownServicesInfo,
  dropdownHomeInfo,
  dropdownFestivalInfo,
} from "./constant";
import { Link } from "react-router-dom";
import { NavStyle } from "./style";
import { routes } from "../../routes";

export const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar">
        <div className="container">
          <DropDown items={dropdownHomeInfo} dropdownTitle="ISKCON" />
          <DropDown items={dropdownFestivalInfo} dropdownTitle="Festival" />
          <DropDown items={dropdownServicesInfo} dropdownTitle="Services" />
          <StyledLink to="/">
            <ImgStyle src={logoUrl} alt="Logo" />
          </StyledLink>
          <DropDown items={dropdownMediaInfo} dropdownTitle="media" />
          <StyledLink to="/contact">Contact</StyledLink>
          <DropDown items={dropdownDonationInfo} dropdownTitle="Donate" />
          <div>
            {socialMediaIcon.map((item) => (
              <a key={item.name} href={item.href}>
                <MDBIcon fab icon={item.icon} />
              </a>
            ))}
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="link" to={routes.home}>
              Home
            </Link>
            <Link className="link" to={routes.festival}>
              Festival
            </Link>
            <Link className="link" to={routes.contact}>
              Contact
            </Link>
            <Link className="link" to={routes.visitUs}>
              Visit Us
            </Link>
          </div>
        </div>
      </nav>
    </NavStyle>
  );
};
