import { NavStyle, StyledLink, ImgStyle } from "./style";
import { DropDown } from "../Dropdown";
import { donationInfo, mediaInfo, socialMediaIcon } from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/iskcon-logo.png";
import { servicesInfo, dropdownItems, dropdownFestivalInfo } from "./constant";

export const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar">
        <div className="container">
          <DropDown items={dropdownItems} dropdownTitle="ISKCON" />
          <DropDown items={dropdownFestivalInfo} dropdownTitle="Festival" />
          <DropDown items={servicesInfo} dropdownTitle="Services" />
          <StyledLink to="/">
            <ImgStyle src={logoUrl} alt="Logo" />
          </StyledLink>
          <DropDown items={mediaInfo} dropdownTitle="media" />
          <StyledLink to="Contact">Contact</StyledLink>
          <DropDown items={donationInfo} dropdownTitle="Donate" />
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
