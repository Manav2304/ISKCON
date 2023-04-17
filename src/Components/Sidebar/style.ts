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

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
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
`
export const NavStyle = styled.nav`
  margin-top: 0;
  display: block;
  justify-content: center;
  align-items: center;
`;


export const ToggleButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    margin: 10px;
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
    width: 10px;
    height: 10px;
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


