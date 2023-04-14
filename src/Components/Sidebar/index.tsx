import { useEffect, useRef, useState } from "react";
import { NavStyle, SidebarStyle, ToggleButton } from "./style";
import { ImgStyle, SocialMediaIconsStyle } from "../Navbar/style";
import { PageDropdown } from "../Dropdown";
import {
  dropdownHomeInfo,
  dropdownServicesInfo,
  socialMediaIcon,
} from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/isckon-logo.png";
import { routes } from "../../routes";
import { StyledLink } from "./style";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";

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
        <ToggleButton onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </ToggleButton>
        <SidebarStyle isOpen={isOpen}>
          <nav>
            <PageDropdown items={dropdownHomeInfo} toggleTitle="ISKCON" />
            <PageDropdown items={dropdownServicesInfo} toggleTitle="Services" />
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
      <StyledLink to={routes.home}>
          <ImgStyle src={logoUrl} alt="Logo" />
        </StyledLink>
    </div>
  );
};