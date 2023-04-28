import styled from "styled-components";
import title from "../../assets/images/navbar-bg.jpg";
import { Link } from "react-router-dom";

export const NavStyle = styled.nav`
  background-image: url(${title});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 20px;
  }

  @media (min-width: 1400px) {
    height: 105px !important;
    width: 100% !important;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

export const ImgStyle = styled.img`
  height: 70px;

  @media (max-width: 767px) {
    height: 30px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 50px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    height: 60px;
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    height: 90px;
    width: 130px;
  }

  @media (min-width: 1400px) {
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
