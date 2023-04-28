import { MDBCol, MDBContainer, MDBFooter } from "mdb-react-ui-kit";
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

export const FooterLogoStyle = styled.div`
  width: 500px;
  align-content: center;
  margin: 5px;
  margin-top: 20px;
  margin-right: -6px;

  @media (${devices.mobileES}) {
    height: 130px;
    width: 100%;
    margin-top: 100px;
  }
  @media (${devices.mobileS}) {
    height: 130px;
    margin-top: 150px;
  }
  @media (${devices.mobileM}) {
    height: 150px;
    padding-right: 5px;
    margin-top: 200px;
  }
  @media (${devices.mobileL}) {
    height: 180px;
    margin-top: 200px;
  }
  @media (${devices.tablet}) {
    height: 320px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (${devices.laptop}) {
    height: 480px;
    padding-left: 115px;
    padding-right: 115px;
  }
  @media (${devices.laptopL}) {
    height: 580px;
  }
  @media (${devices.desktop}) {
    height: 1080px;
  }
`;

export const Heading = styled.h6`
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 4px;
  margin-left: 130px;
  font-size: 20px;

  @media (${devices.mobileES}) {
    margin-left: 20px;
    margin-top: -50px;
  }
  @media (${devices.mobileS}) {
    height: 130px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 20px;
  }
  @media (${devices.mobileM}) {
    height: 150px;
    padding-right: 30px;
    font-size: 22px;
    margin-top: -30px;
  }
  @media (${devices.mobileL}) {
    margin-left: 250px;
    font-size: 30px;
  }
  @media (${devices.tablet}) {
    height: 320px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (${devices.laptop}) {
    height: 480px;
    padding-left: 115px;
    padding-right: 115px;
  }
  @media (${devices.laptopL}) {
    height: 580px;
  }
  @media (${devices.desktop}) {
    height: 1080px;
  }
`;

export const ContactStyle = styled.div`
  margin-top: 35px;
  margin-left: 50px;
  float: right;
  font-family: "Times New Roman", Times, serif;

  @media (${devices.mobileES}) {
    height: 130px;
    width: 100%;
    margin-top: 10px;
    font-size: 15px;
    margin-bottom: 90px;
  }
  @media (${devices.mobileS}) {
    height: 130px;
    margin-top: 50px;
    font-size: 18px;
  }
  @media (${devices.mobileM}) {
    margin-top: 50px;
    margin-right: -10px;
    font-size: 20px;
  }
  @media (${devices.mobileL}) {
    margin-right: -55px;
    font-size: 30px;
  }
  @media (${devices.tablet}) {
    height: 320px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (${devices.laptop}) {
    height: 480px;
    padding-left: 115px;
    padding-right: 115px;
  }
  @media (${devices.laptopL}) {
    height: 580px;
  }
  @media (${devices.desktop}) {
    height: 1080px;
  }
`;

export const TermsTitle = styled(Link)`
  color: #fff;
  font-size: 18px;
  margin-bottom: -15px;
  margin-top: 15px;
  font-family: "Times New Roman", Times, serif;
  text-decoration: none;
  text-decoration-color: none;

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
    height: 320px;
  }
  @media (${devices.laptop}) {
    height: 480px;
    font-size: 28px;
  }
  @media (${devices.laptopL}) {
    height: 580px;
  }
  @media (${devices.desktop}) {
    height: 1080px;
    font-size: 40px;
  }
`;

export const CopyRights = styled.div`
  color: #fff;
  font-size: 18px;
  margin-bottom: -15px;
  margin-top: -15px;
  font-family: "Times New Roman", Times, serif;
  text-decoration: none;
  text-decoration-color: none;

  @media (${devices.mobileES}) {
    font-size: 10px;
  }
  @media (${devices.mobileS}) {
    font-size: 15px;
  }
  @media (${devices.mobileM}) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (${devices.mobileL}) {
    padding-left: 35px;
    padding-right: 35px;
  }
  @media (${devices.tablet}) {
    font-size: 23px;
  }
  @media (${devices.laptop}) {
    padding-left: 115px;
    padding-right: 115px;
  }
  @media (${devices.laptopL}) {
  }
  @media (${devices.desktop}) {
    font-size: 38px;
  }
`;

export const BgColor = styled.div`
  background-color: #963;
  color: #fff;
`;

export const TimeStyle = styled.div`
  text-align: right;
  color: #fff;
  margin-top: 15px;
  margin-right: 130px;
  font-family: "Times New Roman", Times, serif;

  @media (${devices.mobileES}) {
    height: 130px;
    width: 100%;
    padding-right: 35px;
    font-size: 15px;
  }
  @media (${devices.mobileS}) {
    padding-right: 50px;
    margin-top: -90px;
    font-size: 18px;
  }
  @media (${devices.mobileM}) {
    padding-right: 70px;
    margin-top: -110px;
    font-size: 20px;
  }
  @media (${devices.mobileL}) {
    font-size: 30px;
    margin-left: -150px;
    margin-top: -240px;
  }
  @media (${devices.tablet}) {
    height: 320px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (${devices.laptop}) {
    height: 480px;
    padding-left: 115px;
    padding-right: 115px;
  }
  @media (${devices.laptopL}) {
    height: 580px;
  }
  @media (${devices.desktop}) {
    height: 1080px;
  }
`;

export const StyledMDBFooter = styled(MDBFooter)`
  background-color: transparent;
  text-align: center;
  @media (max-width: 1366px) {
    padding: 0;
    font-size: 0.8em;
  }
`;

export const TermsContainer = styled.div`
  background-color: #963;
  padding: 10px;
`;

export const TermsHeading = styled.h6`
  font-style: bold;
  text-align: center;
  color: #fff;
  display: inline-flex;
  font-family: "Times New Roman", Times, serif;

  @media (${devices.mobileES}) {
    height: 10px;
    width: 100%;
    margin-left: 20px;
  }
  @media (${devices.mobileS}) {
    height: 10px;
    margin-left: 25px;
  }
  @media (${devices.mobileM}) {
    height: 10px;
    margin-left: 35px;
  }
  @media (${devices.mobileL}) {
    height: 10px;
    margin-left: 30px;
  }
  @media (${devices.tablet}) {
    height: 10px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (${devices.laptop}) {
    height: 10px;
    margin-left: 75px;
  }
  @media (${devices.laptopL}) {
    height: 10px;
    margin-left: 250px;
  }
  @media (${devices.desktop}) {
    height: 10px;
    margin-left: 130px;
  }
`;

export const PrivacyLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterLinksContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
  font-family: "Times New Roman", Times, serif;
  margin-left: 50px;
  padding-right: 50px;
`;

export const ContactIcon = styled.i`
  margin-right: 4px;
`;

export const ContactText = styled.span`
  margin-left: 10px;
  text-align: left;
`;

export const TermsMDBContainer = styled(MDBContainer)`
  width: 100%;
  justify-items: center;
  text-align: center;
  background-color: #963;
  color: #fff;
`;

export const ContactMDBCol = styled(MDBCol)`
  align-content: center;
`;

export const TimeMDBCol = styled(MDBCol)`
  align-content: center;
  justify-content: center;
`;
