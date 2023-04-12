import styled from "styled-components";
import title from "../../assets/images/navbar-bg.png";
import { Link } from "react-router-dom";

export const NavStyle = styled.nav`
  background-image: url(${title});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
`;

export const StyledLink = styled(Link)`
  color: #f00;
  text-decoration: none;
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
    height: 85px;
  }
`;
export const SocialMediaIconsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconsStyle = styled.a`
  margin-right: 5px;
  color: #8b0000;
  padding: 5px;
  border-radius: 50%;
  background-color: #f5fffa;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #555;
  }
`;
