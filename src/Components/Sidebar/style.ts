import styled from "styled-components";
import { Link } from "react-router-dom";
import title from "../../assets/images/navbar-bg.png";

export const SidebarStyle = styled.div<{ isOpen: boolean }>`
  background-image: url(${title});
  background-size: cover;
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: 999;
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
  padding: 1rem;
  flex-direction: column;
  box-shadow: ${({ isOpen }) => (isOpen ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none")};
`;

export const nav = styled.nav`
  display: block;
  color: #f00;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const NavStyle = styled.nav`
  background-image: url(${title});
  background-size: cover;
  margin-top: 0;
  display: block;
  align-items: center;
  margin-bottom: 2px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const ToggleButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 10px;
    right: 0;
    padding: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 1000;
  }
`;

export const CloseIcon = styled.div`
  display: inline;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 2px;
      height: 10px;
      background-color: transparent;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  color: #f00;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  padding: 8px 16px;
`;

export const ImgStyle = styled.img`
  height: 70px;
  display: none;

  @media (max-width: 767px) {
    height: 50px;
    margin-left: -20px;
    margin-right: 5px;
    display: block;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 50px;
    display: none;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    height: 60px;
    display: none;
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    height: 90px;
    width: 130px;
    display: none;
  }

  @media (min-width: 1400px) {
    height: 85px;
    display: none;
  }
`;

export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  font-weight: bold;
  margin-left: -40px;
  margin-right: 5px;
  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 17px;
  }
`;

