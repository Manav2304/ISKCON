import { Link } from "react-router-dom";
import styled from "styled-components";

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

  @media (${devices.laptop}) {
    text-align: left;
    margin-left: 60px;
  }

  @media (${devices.laptopL}) {
    text-align: left;
    margin-left: 60px;
  }

  @media (${devices.desktop}) {
    text-align: left;
    margin-left: 60px;
  }
`;

export const TimeStyle = styled.div`
  color: #fff;
  font-family: "Times New Roman", Times, serif;
`;

export const TermsTitle = styled(Link)`
  color: #fff;
  margin-top: 10px;
  font-family: "Times New Roman", Times, serif;
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
    color: #ff007f;
  }
`;

export const BgColor = styled.div`
  background-color: #963;
  color: #fff;
`;

export const TermsHeading = styled.h6`
  font-style: bold;
  text-align: center;
  justify-content: center;
  color: #fff;
  display: inline-flex;
  font-family: "Times New Roman", Times, serif;
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
  font-family: "Times New Roman", Times, serif;
`;

export const ContactIcon = styled.i`
  color: #fff;
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
    width: 90% !important;
    margin-left: 0;
    height: 95% !important;
  }

  @media (${devices.laptop}) {
    margin-top: -5px;
    width: 250% !important;
    margin-left: -120px;
    height: 100% !important;
  }

  @media (${devices.laptopL}) {
    margin-top: -5px;
    width: 250% !important;
    margin-left: -160px;
    height: 100% !important;
  }

  @media (${devices.desktop}) {
    margin-top: -5px;
    width: 250% !important;
    margin-left: -170px;
    height: 100% !important;
  }
`;

export const ContactWrapper = styled.div`
  @media (${devices.mobileES}) {
    justify-content: justify;
    text-align: left;
    margin-left: 40px;
    padding-left: 20px;
  }

  @media (${devices.mobileS}) {
    justify-content: justify;
    text-align: left;
    margin-left: 60px;
    padding-left: 40px;
  }

  @media (${devices.mobileM}) {
    justify-content: justify;
    text-align: left;
    margin-left: 60px;
    padding-left: 40px;
  }

  @media (${devices.mobileL}) {
    justify-content: justify;
    text-align: left;
    margin-left: 20px;
    padding-left: 40px;
  }

  @media (${devices.tablet}) {
    text-align: left;
    margin-left: 20px;
    padding-left: 40px;
    justify-content: justify;
  }

  @media (${devices.laptop}) {
    text-align: left;
    margin-left: 20px;
    padding-left: 40px;
    justify-content: justify;
  }

  @media (${devices.laptopL}) {
    text-align: left;
    margin-left: 20px;
    padding-left: 30px;
    justify-content: justify;
  }

  @media (${devices.desktop}) {
    text-align: left;
    margin-left: 20px;
    padding-left: 30px;
    justify-content: justify;
  }
`;
export const CopyRights = styled.div`
  color: white;
`;
