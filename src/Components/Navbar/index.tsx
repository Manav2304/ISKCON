import { NavStyle } from "./style";
import { DropDown } from "./Dropdown";
import { socialmediaIcon } from "./Dropdown/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logo from "../../assets/images/isckonlogo.png";
import { StyledLink } from "./style";
export const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container">
          <DropDown />
          <StyledLink to="#">GO Seva</StyledLink>
          <StyledLink to="#">Festival</StyledLink>
          <StyledLink to="#">Services</StyledLink>
          <StyledLink to="/">
            <img src={logo} alt="Logo" />
          </StyledLink>
          <StyledLink to="#">Conatact</StyledLink>
          <StyledLink to="#">Media</StyledLink>
          <StyledLink to="/donation">Donation</StyledLink>
          <div>
            {socialmediaIcon.map((item) => (
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
