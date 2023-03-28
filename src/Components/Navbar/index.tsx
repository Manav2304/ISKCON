import { NavStyle, StyledLink, ImgStyle } from "./style";
import { DropDown } from "../Dropdown";
import { socialMediaIcon } from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/isckonlogo.png";

export const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar">
        <div className="container">
          <DropDown />
          <StyledLink to="#">Go Seva</StyledLink>
          <StyledLink to="#">Festival</StyledLink>
          <StyledLink to="#">Services</StyledLink>
          <StyledLink to="/">
            <ImgStyle src={logoUrl} alt="Logo" />
          </StyledLink>
          <StyledLink to="#">Contact</StyledLink>
          <StyledLink to="#">Media</StyledLink>
          <StyledLink to="/donation">Donation</StyledLink>
          <div>
            {socialMediaIcon.map((item) => (
              <a key={item.name} href={item.href} className="me-1 text-reset">
                <MDBIcon fab icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </NavStyle>
  );
};
