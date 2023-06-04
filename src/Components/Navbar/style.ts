import styled from "styled-components";
import title from "../../assets/images/navbar-bg.png";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 20px;
  }

  @media (${devices.laptop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 10px;
    margin-top: 50px;
  }

  @media (${devices.laptopL}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 100px;
    margin-top: 50px;
  }

  @media (${devices.desktop}) {
    height: 105px !important;
    width: 100% !important;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ad0d0d;
  }
`;

// export const ImgStyle = styled.img`
//   height: 70px;

//   @media (${devices.mobileES}) {
//     height: 10px;
//   }

//   @media (${devices.mobileS}) {
//     display: none;
//   }

//   @media (${devices.mobileM}) {
//     display: none;
//   }

//   @media (${devices.mobileL}) {
//     display: none;
//   }

//   @media (${devices.tablet}) {
//     display: flex;
//     height: 70px;
//   }

//   @media (${devices.laptop}) {
//     height: 80px;
//     // margin-left: -40px;
//   }

//   @media (${devices.laptopL}) {
//     height: 90px;
//     // margin-left: -10px;
//   }

//   @media (${devices.desktop}) {
//     display: flex;
//     height: 100px;
//     // margin-left: -10px;
//   }
// `;

export const ImgStyle = styled.img`
  height: 70px;
  margin: auto;

  @media (${devices.mobileES}) {
    height: 10px;
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
    display: flex;
    height: 70px;
  }

  @media (${devices.laptop}) {
    height: 80px;
  }

  @media (${devices.laptopL}) {
    height: 80px;
  }

  @media (${devices.desktop}) {
    display: flex;
    height: 100px;
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
  margin-top: 5px;
  padding: 10px;
  transition: background-color 0.2s ease;
`;

export const MarqueeWrapper = styled(Marquee)`
  color: #fff;
  background-color: #ad0d0d;
  height: 75px;
  width: 85%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media (${devices.mobileES}) {
    display: none;
    height: 0%;
    width: 0%;
  }

  @media (${devices.mobileS}) {
    display: none;
    height: 0%;
    width: 0%;
  }

  @media (${devices.mobileM}) {
    display: none;
    height: 0%;
    width: 0%;
  }

  @media (${devices.mobileL}) {
    display: none;
    height: 0%;
    width: 0%;
  }

  @media (${devices.tablet}) {
    display: none;
    height: 0%;
    width: 0%;
  }

  @media (${devices.laptop}) {
    height: 55px;
    width: 85%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }

  @media (${devices.laptopL}) {
    height: 55px;
    width: 85%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }

  @media (${devices.desktop}) {
    height: 55px;
    width: 85%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }
`;

export const SocialMediaIconWrapper = styled.div`
  background-color: #ad0d0d;
  height: 55px;
  width: 15%;
  position: fixed;
  top: 0;
  left: 85%;
  right: 0%;
  display: flex;
  display: right;

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
    height: 55px;
    width: 15%;
    position: fixed;
    top: 0;
    left: 85%;
    right: 0%;
    z-index: 9999;
    display: flex;
    display: right;
  }

  @media (${devices.laptopL}) {
    height: 55px;
    width: 15%;
    position: fixed;
    top: 0;
    left: 85%;
    right: 0%;
    z-index: 9999;
    display: flex;
    display: right;
  }

  @media (${devices.desktop}) {
    height: 55px;
    width: 15%;
    position: fixed;
    top: 0;
    left: 85%;
    right: 0%;
    z-index: 9999;
    display: flex;
    display: right;
  }
`;
