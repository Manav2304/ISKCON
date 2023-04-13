import {
  NavStyle,
  StyledLink,
  ImgStyle,
  SocialMediaIconsStyle,
  IconsStyle,
} from "./style";
import { PageDropdown } from "../Dropdown";
import { dropdownServicesInfo, socialMediaIcon } from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/isckon-logo.png";
import { dropdownHomeInfo } from "./constant";
import { routes } from "../../routes";

export const NavigationBar = () => {
  return (
    <NavStyle className="navbar fixed-top">
      <div className="container">
        <PageDropdown items={dropdownHomeInfo} toggleTitle="ISKCON" />
        <PageDropdown items={dropdownServicesInfo} toggleTitle="Services" />
        <StyledLink to={routes.visitUs}>Visit Us</StyledLink>
        <StyledLink to={routes.media}>Media</StyledLink>
        <StyledLink to={routes.home}>
          <ImgStyle src={logoUrl} alt="Logo" />
        </StyledLink>
        <StyledLink to={routes.donation}>Donate</StyledLink>
        <StyledLink to={routes.festival}>Festival</StyledLink>
        <StyledLink to={routes.contact}>Contact</StyledLink>
        <SocialMediaIconsStyle>
          {socialMediaIcon.map((item) => (
            <IconsStyle key={item.name} href={item.href}>
              <MDBIcon fab icon={item.icon} />
            </IconsStyle>
          ))}
        </SocialMediaIconsStyle>
      </div>
    </NavStyle>
  );
};
