import { NavStyle, StyledLink, ImgStyle, SocialMediaIconsStyle } from "./style";
import { DropDown } from "../Dropdown";
import { donationInfo, mediaInfo, socialMediaIcon } from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/isckon-logo.png";
import { servicesInfo, dropdownHomeInfo, festivanInfo } from "./constant";

export const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar fixed-top">
        <div className="container">
          <DropDown items={dropdownHomeInfo} toggleTitle="ISKCON" />
          <DropDown items={festivanInfo} toggleTitle="Festival" />
          <DropDown items={servicesInfo} toggleTitle="Services" />
          <StyledLink to="/">
            <ImgStyle src={logoUrl} alt="Logo" />
          </StyledLink>
          <DropDown items={mediaInfo} toggleTitle="media" />
          <StyledLink to="/contact">Contact</StyledLink>
          <DropDown items={donationInfo} toggleTitle="Donate" />
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
