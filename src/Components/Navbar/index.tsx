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
          <StyledLink to="Contact">Contact</StyledLink>
          <DropDown items={dropdownDonationInfo} dropdownTitle="Donate" />
          <div>
            {socialMediaIcon.map((item) => (
              <a key={item.name} href={item.href}>
                <MDBIcon fab icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </NavStyle>
  );
};
