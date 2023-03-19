import styled from "styled-components";
import title from "../../assets/bgimage.png";

export const NavStyle = styled.div`
  .navbar {
    height: 150px;
    background-image: url(${title});
    background-repeat: repeat;

    a {
      text-decoration: none;
    }
  }
`;

export const Image = styled.div`
  img {
    height: 150px;
  }
`;
