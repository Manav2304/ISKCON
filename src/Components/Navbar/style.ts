import styled from "styled-components";
import title from "../../assets/images/navbar-bg.png";
import { Link } from "react-router-dom";
import { devices } from "../../style";

export const NavStyle = styled.nav`
  background-image: url(${title});
  background-repeat: repeat;
  position: fixed;

  @media (${devices.mobileES}) {
    display: none;
  }

  @media (${devices.mobileS}) {
    display: none;
  }

  @media (${devices.mobileM}) {
    display: none;
  }

  @media (${devices.mobileL}) {
    display: none;
  }

  @media (${devices.tablet}) {
    display: none;
  }

  @media (${devices.laptop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 20px;
  }

  @media (${devices.laptopL}) {
    height: 105px !important;
    width: 100% !important;
  }

  @media (${devices.desktop}) {
    height: 105px !important;
    width: 100% !important;
  }
`;
export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    background-color: transparent;
    border: none;
    color: #fff;
  }
`;

export const ImgStyle = styled.img`
  height: 70px;

  @media (${devices.mobileES}) {
    display: none;
  }

  @media (${devices.mobileS}) {
    display: none;
  }

  @media (${devices.mobileM}) {
    display: none;
  }

  @media (${devices.mobileL}) {
    display: none;
  }

  @media (${devices.tablet}) {
    display: none;
  }

  @media (${devices.laptop}) {
    display: block;
    height: 80px;
  }

  @media (${devices.laptopL}) {
    display: block;
    height: 90px;
  }

  @media (${devices.desktop}) {
    display: block;
    height: 100px !important;
    width: 100% !important;
  }
`;

export const SocialMediaIconsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const IconsStyle = styled.a`
  color: #fff;
  padding: 3px;
  transition: background-color 0.2s ease;
`;
