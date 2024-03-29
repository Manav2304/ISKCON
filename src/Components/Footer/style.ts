import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../style";

export const HeadingStyle = styled.h6`
  color: #fff;
`;

export const ContactHeadingStyle = styled.div`
  color: #fff;

  @media (${devices.mobileES}) {
    text-align: center;
    margin-left: 0;
  }

  @media (${devices.mobileS}) {
    text-align: center;
    margin-left: 0;
  }

  @media (${devices.mobileM}) {
    text-align: center;
    margin-left: 0;
  }

  @media (${devices.mobileL}) {
    text-align: center;
    margin-left: 0;
  }

  @media (${devices.tablet}) {
    text-align: left;
    margin-left: 60px;
  }

  @media (${devices.tabletL}) {
    text-align: left;
    margin-left: 120px;
  }

  @media (${devices.laptop}) {
    text-align: left;
    margin-left: 100px;
  }

  @media (${devices.laptopL}) {
    text-align: left;
    margin-left: 112px;
  }

  @media (${devices.desktop}) {
    text-align: left;
    margin-left: 60px;
  }
`;

export const TimeStyle = styled.div`
  color: #fff;
  font-family: Rosario-Light, sans-serif;
`;

export const TermsTitle = styled(Link)`
  color: #fff;
  margin-top: 10px;
  font-family: Rosario-Light, sans-serif;
  text-decoration: none;
  text-decoration-color: none;

  &:hover {
    text-decoration: none;
    color: #fff;
  }

  @media (${devices.mobileES}) {
    font-size: 11px;
    margin-top: 10px;
  }

  @media (${devices.mobileS}) {
    font-size: 13px;
    margin-top: 10px;
  }

  @media (${devices.mobileM}) {
    font-size: 14px;
    margin-top: 10px;
  }

  @media (${devices.mobileL}) {
    font-size: 23px;
    margin-top: 10px;
  }

  @media (${devices.tablet}) {
    font-size: 1.5rem;
  }

  @media (${devices.laptop}) {
    font-size: 16px;
  }

  @media (${devices.laptopL}) {
    font-size: 18px;
  }

  @media (${devices.desktop}) {
    font-size: 25px;
  }
`;

export const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #800000;
  }
`;

export const BgColor = styled.div`
  background-color: #963;
  opacity: 0.8;
  color: #fff;
`;

export const TermsHeading = styled.h6`
  font-style: bold;
  text-align: center;
  justify-content: center;
  color: #fff;
  display: inline-flex;
  font-family: Rosario-Light, sans-serif;
  width: 100%;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactDiv = styled.div`
  font-family: Rosario-Light, sans-serif;
`;

export const ContactIcon = styled.i`
  color: #fff;
  margin-right: 5px;
`;

export const ContactText = styled.span`
  text-align: left;
`;

export const FooterLogo = styled.img`
  @media (${devices.mobileES}) {
    margin-top: 5px;
    width: 100% !important;
    margin-left: 0;
    height: 100% !important;
  }

  @media (${devices.mobileS}) {
    margin-top: 5px;
    width: 100% !important;
    margin-left: 0;
    height: 100% !important;
  }

  @media (${devices.mobileM}) {
    margin-top: 5px;
    width: 100% !important;
    margin-left: 0;
    height: 100% !important;
  }

  @media (${devices.mobileL}) {
    margin-top: 5px;
    width: 100% !important;
    margin-left: 0;
    height: 100% !important;
  }

  @media (${devices.tablet}) {
    margin-top: 5px;
    padding-left: 30px;
    padding-bottom: 10px;
    width: 90% !important;
    height: 95% !important;
  }

  @media (${devices.tabletL}) {
    margin-top: 5px;
    height: 70% !important;
    padding-left: 0;
    padding-bottom: 0;
    margin-left: -185px;
    width: 300% !important;
  }

  @media (${devices.laptop}) {
    margin-top: 15px;
    width: 300% !important;
    margin-left: -170px;
    padding-left: 0;
    padding-bottom: 0;
    height: 65% !important;
  }

  @media (${devices.laptopM}) {
    margin-top: 15px;
    width: 275% !important;
    margin-left: -205px;
    padding-left: 0;
    padding-bottom: 0;
    height: 70% !important;
  }

  @media (${devices.laptopL}) {
    margin-top: 15px;
    width: 270% !important;
    margin-left: -195px;
    padding-left: 0;
    padding-bottom: 0;
    height: 70% !important;
  }

  @media (${devices.desktop}) {
    margin-top: 15px;
    width: 240% !important;
    padding-left: 0;
    padding-bottom: 0;
    margin-left: -180px;
    height: 65% !important;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;

  @media (${devices.mobileES}) {
    justify-content: justify;
    text-align: left;
    margin-left: 10px;
    padding-left: 20px;
  }

  @media (${devices.mobileS}) {
    justify-content: justify;
    text-align: left;
    margin-left: 10px;
    padding-left: 40px;
  }

  @media (${devices.mobileM}) {
    justify-content: justify;
    text-align: left;
    margin-left: 10px;
    padding-left: 40px;
  }

  @media (${devices.mobileL}) {
    justify-content: justify;
    text-align: left;
    margin-left: 10px;
    padding-left: 150px;
  }

  @media (${devices.tablet}) {
    text-align: left;
    margin-left: 20px;
    padding-left: 10px;
    justify-content: justify;
  }

  @media (${devices.tabletL}) {
    text-align: left;
    margin-left: 20px;
    padding-left: 10px;
    justify-content: justify;
  }

  @media (${devices.laptop}) {
    text-align: left;
    margin-left: 70px;
    justify-content: left;
    margin-right: -100px;
  }

  @media (${devices.laptopL}) {
    text-align: left;
    margin-left: 80px;
    padding-left: 30px;
    justify-content: justify;
    margin-right: -100px;
    padding-right: 40px;
  }

  @media (${devices.desktop}) {
    text-align: left;
    margin-left: 20px;
    padding-left: 30px;
    justify-content: justify;
    margin-right: -500px;
    padding-right: 40px;
  }
`;

export const CopyRights = styled.div`
  color: white;
  font-family: Rosario-Light, sans-serif;
`;
