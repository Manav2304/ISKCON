import styled from "styled-components";
import title from "../../assets/images/navbarnew-bg.png";
import { Link } from "react-router-dom";
import { devices } from "../../Pages/Home/style";

export const NavStyle = styled.nav`
  background-image: url(${title});
  background-repeat: repeat;
  position: fixed;
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
    height: 85px;
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
