import styled from "styled-components";
import title from "../../assets/images/bgimage.png";
import { Dropdown } from "react-bootstrap";
export const NavStyle = styled.div`
  .navbar {
    height: 85px;
    background-image: url(${title});
    background-repeat: repeat;
    color: #7e5959;

    @media (max-width: 767px) {
      .navbar {
        height: 80px;
      }

      img {
        height: 30px;
      }
    }

    @media (min-width: 768px) and (max-width: 991px) {
      .navbar {
        height: 100px;
      }

      img {
        height: 50px;
      }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      .navbar {
        height: 110px;
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
        height: 70px;
      }
    }

    @media (max-width: 480px) {
      .navbar {
        height: 60px;
      }

      img {
        height: 10px;
      }
    }

    @media (orientation: landscape) and (max-width: 991px) {
      .navbar {
        height: 70px;
      }

      img {
        height: 20px;
      }
    }

    @media (orientation: landscape) and (min-width: 992px) and (max-width: 1199px) {
      .navbar {
        height: 80px;
      }

      img {
        height: 30px;
      }
    }

    @media (orientation: landscape) and (min-width: 1200px) {
      .navbar {
        height: 140px;
      }

      img {
        height: 90px;
        width: 140px;
      }
    }

    a {
      text-decoration: none;
    }
  }
`;

export const TransparentDropdown = styled(Dropdown)`
  border: none;

  .dropdown-toggle {
    color: #7e5959;
    background-color: transparent;
    border: solid black;
  }

  .dropdown-menu {
    background-color: #7e5959;
  }

  .dropdown-item {
    color: white;
  }
`;
