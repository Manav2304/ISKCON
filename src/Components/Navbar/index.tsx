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
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavStyle className="navbar fixed-top">
      <div className="container">
        <PageDropdown items={dropdownHomeInfo} toggleTitle="Iskcon" />
        <PageDropdown items={dropdownServicesInfo} toggleTitle="Services" />
        <StyledLink to={routes.visitUs} onClick={handleLinkClick}>
          Visit Us
        </StyledLink>
        <StyledLink to={routes.media} onClick={handleLinkClick}>
          Media
        </StyledLink>
        <StyledLink to={routes.home} onClick={handleLinkClick}>
          <ImgStyle src={logoUrl} alt="Logo" />
        </StyledLink>
        <StyledLink to={routes.donation} onClick={handleLinkClick}>
          Donate
        </StyledLink>
        <StyledLink to={routes.festival} onClick={handleLinkClick}>
          Festival
        </StyledLink>
        <StyledLink to={routes.contact} onClick={handleLinkClick}>
          Contact
        </StyledLink>
        <SocialMediaIconsStyle>
          {socialMediaIcon.map((item) => (
            <IconsStyle
              key={item.name}
              href={item.href}
              target="_blank"
              onClick={handleLinkClick}
            >
              <MDBIcon fab icon={item.icon} />
            </IconsStyle>
          ))}
        </SocialMediaIconsStyle>
      </div>
    </NavStyle>
  );
};
