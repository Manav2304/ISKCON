import { NavStyle, StyledLink, ImgStyle, SocialMediaIconsStyle } from "./style";
import { DropDown } from "../Dropdown";
import {
  donationInfo,
  mediaInfo,
  socialMediaIcon,
  visitUsInfo,
} from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/isckon-logo.png";
import { servicesInfo, dropdownHomeInfo, festivalInfo } from "./constant";
import { routes } from "../../routes";

export const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar fixed-top">
        <div className="container">
          <DropDown items={dropdownHomeInfo} toggleTitle="ISKCON" />
          <DropDown items={servicesInfo} toggleTitle="Services" />
          <DropDown items={visitUsInfo} toggleTitle="Visit Us" />
          <DropDown items={mediaInfo} toggleTitle="Media" />
          <StyledLink to="/">
            <ImgStyle src={logoUrl} alt="Logo" />
          </StyledLink>
          <DropDown items={donationInfo} toggleTitle="Donate" />
          <DropDown items={festivalInfo} toggleTitle="Festival" />
          <StyledLink to={routes.contact}>Contact</StyledLink>
          <SocialMediaIconsStyle>
            {socialMediaIcon.map((item) => (
              <a key={item.name} href={item.href}>
                <MDBIcon fab icon={item.icon} />
              </a>
            ))}
          </SocialMediaIconsStyle>
        </div>
      </nav>
    </NavStyle>
  );
};
