import styled from "styled-components";
import title from "../../assets/bgimage.png";

export const NavStyle = styled.div`
  .navbar {
    height: 90px;
    background-image: url(${title});
    background-repeat: repeat;

    @media (max-width: 767px) {
      .navbar {
        height: 80px;
      }

      img {
        height: 60px;
      }
    }

    @media (min-width: 1200px) {
      .navbar {
        height: 120px;
      }

      img {
        height: 100px;
      }
    }

    @media (max-width: 480px) {
      .navbar {
        height: 60px;
      }

      img {
        height: 40px;
      }
    }

    a {
      text-decoration: none;
    }
  }
`;
