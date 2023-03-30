import styled from "styled-components";
import title from "../../assets/images/bgImage.png";
import { Link } from "react-router-dom";

export const NavStyle = styled.nav`
  width: 100%;
  margin-top: 1px;
  top: 1px;
  background-image: url(${title});
  background-size: repeat;
  position: fixed;
  height: 95px;
  z-index: 1;
`;

export const StyledLink = styled(Link)`
  color: red;
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
    height: 70px;
  }

  @media (min-width: 1400px) {
    height: 85px;
  }
`;
