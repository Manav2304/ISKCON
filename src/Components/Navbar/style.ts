import styled from "styled-components";
import title from "../../assets/images/navbar-bg.jpg";
import { Link } from "react-router-dom";

export const sizes = {
  mobileES: "100px",
  mobileS: "375px",
  mobileM: "425px",
  mobileL: "576px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileES: `min-width: ${sizes.mobileES}`,
  mobileS: `min-width: ${sizes.mobileS}`,
  mobileM: `min-width: ${sizes.mobileM}`,
  mobileL: `min-width: ${sizes.mobileL}`,
  tablet: `min-width: ${sizes.tablet}`,
  laptop: `min-width: ${sizes.laptop}`,
  laptopL: `min-width: ${sizes.laptopL}`,
  desktop: `min-width: ${sizes.desktop}`,
};

export const NavStyle = styled.nav`
  background-image: url(${title});
  background-repeat: no-repeat;
  background-size: cover;
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

  /* @media (max-width: 767px) {
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
  } */
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
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
    width: 130px;
  }

  @media (${devices.desktop}) {
    display: block;
    height: 100px !important;
    width: 100% !important;
  }


  /* @media (max-width: 767px) {
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
  } */
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
