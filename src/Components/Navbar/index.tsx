import {
  NavStyle,
  StyledLink,
  ImgStyle,
  IconsStyle,
  MarqueeWrapper,
  SocialMediaIconWrapper,
} from "./style";
import { PageDropdown } from "../Dropdown";
import { dropdownServices, dropdownServicesInfo, socialMediaIcon } from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/isckon-logo.png";
import { routes } from "../../routes";

export const NavigationBar = () => {
  return (
    <>
      <MarqueeWrapper pauseOnHover={true}>
        The official website of the international Society for krishna
        Consiousness (ISKCON).
      </MarqueeWrapper>
      <div className="container">
        <SocialMediaIconWrapper>
          {socialMediaIcon.map((item) => (
            <IconsStyle key={item.name} href={item.href} target="_blank">
              <MDBIcon fab icon={item.icon} />
            </IconsStyle>
          ))}
        </SocialMediaIconWrapper>
      </div>
      <NavStyle className="navbar fixed-top">
        <div className="container">
          <StyledLink to={routes.home}>Iskcon</StyledLink>
          <PageDropdown items={dropdownServicesInfo} toggleTitle="Services" />
          <StyledLink to={routes.visitUs}>Visit Us</StyledLink>
          <PageDropdown items={dropdownServices} toggleTitle="Media" />
          {/* <StyledLink to={routes.media}>Media</StyledLink> */}
          <StyledLink to={routes.home}>
            <ImgStyle src={logoUrl} alt="Logo" />
          </StyledLink>
          <StyledLink to={routes.donation}>Donate</StyledLink>
          <StyledLink to={routes.festival}>Festival</StyledLink>
          <StyledLink to={routes.contact}>Contact</StyledLink>
          <StyledLink to={routes.contact}>Blogs</StyledLink>
        </div>
      </NavStyle>
    </>
  );
};
