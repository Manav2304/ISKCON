import styled from "styled-components";
import title from "../../assets/images/bgimage.png";
import { Link } from "react-router-dom";

export const NavStyle = styled.nav`
   {
    width: 100%;
    margin-top: 1px;
    top: 1px;
    background-image: url(${title});
    background-size: repeat;
    position: fixed;
    height: 70px;
    z-index: 1;

    img {
      height: 50px;
    }

    @media (max-width: 767px) {
      height: 50px;

      img {
        height: 30px;
      }
    }

    @media (min-width: 768px) and (max-width: 991px) {
      height: 70px;

      img {
        height: 50px;
      }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      height: 70px;

      img {
        height: 60px;
      }
    }

    @media (min-width: 1200px) and (max-width: 1399px) {
      height: 80px;

      img {
        height: 70px;
      }
    }

    @media (min-width: 1400px) {
      height: 95px;

      img {
        height: 85px;
      }
    }

    a {
      text-decoration: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: red;
`;
export const Navbar = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;
