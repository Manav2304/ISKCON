import styled from "styled-components";
import { Link } from "react-router-dom";
import title from "../../assets/images/navbar-bg.png"

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

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      display: block;
      font-size: 15px;
      margin: 10px;
      text-align: center;
      width: 100%;
      width: 100;

      &:hover {
        color: #ff6f00;
      }
    }
  }
`;

export const NavStyle = styled.nav`
   background-image: url(${title});
  background-size: cover;
  margin-top: 0;
  display: block;
  justify-content: space-between;
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
    top: 0;
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
  color: #f00;
  text-decoration: none;
`;

export const ImgStyle = styled.img`
  height: 70px;
  display: none;

  @media (max-width: 767px) {
    height: 50px;
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
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
  
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  padding: 8px 16px;

  &:hover {
    opacity: 0.8;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  min-width: 160px;
  padding: 8px 0;
`;

export const DropdownItem = styled(Link)`
  display: block;
  color: #333;
  font-size: 14px;
  font-weight: normal;
  padding: 8px 16px;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: #f2f2f2;
  }
`;


