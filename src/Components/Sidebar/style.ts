import styled from "styled-components";
import { Link } from "react-router-dom";
import title from "../../assets/images/navbar-bg.jpg";
import { Accordion, AccordionButton } from "react-bootstrap";
import ArrowIcon from "../../assets/images/arrow-down.png";

export const SidebarStyle = styled.div<{ isOpen: boolean }>`
  background-image: url(${title});
  background-size: cover;
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: 999;
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
  padding: 1rem;
  flex-direction: column;
  box-shadow: ${({ isOpen }) =>
    isOpen ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none"};
`;

export const nav = styled.nav`
  display: block;
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
    top: 0;
    right: 0;
    padding: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 1000;
    font-size: 30px;
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
  color: #fff;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  padding: 2px 16px;

  &:hover {
    background-color: transparent;
    border: none;
    color: #fff;
  }
`;

export const ImgStyle = styled.img`
  height: 70px;
  display: none;

  @media (max-width: 767px) {
    height: 60px;
    margin-left: -20px;
    margin-right: 5px;
    display: block;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 60px;
    display: none;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    height: 70px;
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
  color: #fff;
  font-weight: bold;
  margin-left: -40px;
  margin-right: 5px;
  font-size: 1rem !important;

  @media (max-width: 767px) {
    font-size: 25px;
    margin-right: 30px;
    padding-right: 10px;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AccordionContainer = styled(Accordion)`
  background-color: transparent;
  margin-bottom: none;
`;

export const AccordionItemButton = styled(AccordionButton)`
  display: column;
  outline: none;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  padding: 2px 16px;

  &:hover {
    background-color: transparent;
    border: none;
    color: #fff;
  }

  &::after {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-left: auto;
    content: "";
    background-image: url(${ArrowIcon});
    background-repeat: no-repeat;
    background-size: 20px;
    transition: transform .2s ease-in-out;
  }
`;

export const AccordionItem = styled(Accordion.Item)`
  background-color: none;
  border: none;
  outline: none;
`;

export const AccordionLink = styled(Link)`
  display: block;
  background-color: #e9a872;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 1rem;
  text-decoration: none;
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;

export const IconsStyle = styled.a`
  color: #fff;
  padding: 15px;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease;
`;

export const StyledAccordionItem = styled(Accordion.Item)`
  border: none;
  background-color: transparent;
`;