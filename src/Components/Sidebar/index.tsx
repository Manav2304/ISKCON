import { useEffect, useRef, useState } from "react";
import { HeadingStyle, ImgStyle, NavStyle, SidebarStyle, ToggleButton } from "./style";
import { SocialMediaIconsStyle } from "../Navbar/style";
import {
  socialMediaIcon,
} from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/isckon-logo.png";
import { routes } from "../../routes";
import { StyledLink } from "./style";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";
import { SideBarDropdown } from "./SideBarDropdown";
import { dropdownHomeInfo, dropdownServicesInfo } from "./constant";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !(ref.current as HTMLElement).contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref}>
      <Navbar />
      <NavStyle>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <StyledLink to={routes.home}>
              <ImgStyle src={logoUrl} alt="Logo" />
            </StyledLink>
            <HeadingStyle>
              Sri Sri Radha Giridhariji Temple
            </HeadingStyle>
          </div>
          <ToggleButton onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </ToggleButton>
        </div>
        <SidebarStyle isOpen={isOpen}>
          <nav>
            <SideBarDropdown items={dropdownHomeInfo} toggleTitle="ISKCON" handleClose={handleClose} />
            <SideBarDropdown items={dropdownServicesInfo} toggleTitle="Services" handleClose={handleClose} />
            <StyledLink to={routes.donation} onClick={handleClose}>
              Donate
            </StyledLink>
            <StyledLink to={routes.festival} onClick={handleClose}>
              Festival
            </StyledLink>
            <StyledLink to={routes.contact} onClick={handleClose}>
              Contact
            </StyledLink>
            <StyledLink to={routes.visitUs} onClick={handleClose}>
              Visit Us
            </StyledLink>
            <StyledLink to={routes.media} onClick={handleClose}>
              Media
            </StyledLink>
            <SocialMediaIconsStyle>
              {socialMediaIcon.map((item) => (
                <a key={item.name} href={item.href}>
                  <MDBIcon fab icon={item.icon} />
                </a>
              ))}
            </SocialMediaIconsStyle>
          </nav>
        </SidebarStyle>
      </NavStyle>
    </div>
  );
};