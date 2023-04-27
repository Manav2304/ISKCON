import { MDBCol, MDBContainer, MDBFooter } from "mdb-react-ui-kit";
import styled from "styled-components";

export const FooterLogoStyle = styled.div`
  width: 500px;
  align-content: center;
  margin: 5px;
  margin-top: 50px;
  margin-right: -6px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: -1px;
  }

  @media only screen and (max-width: 1380px) and (min-width: 1340px) {
    margin-left: 45px;
    padding-left: 40px;
  }
`;

export const Heading = styled.h6`
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 4px;
  margin-left: 130px;
  font-size: 20px;

  @media only screen and (max-width: 768px) {
    padding-right: 130px;
    margin-top: -50px;
    text-align: center;
  }

  @media only screen and (min-width: 769px) {
    text-align: center;
    margin-left: 30px;
    padding-right: 50px;
  }

  @media only screen and (max-width: 480px) {
    padding-right: 50px;
    margin-left: 50px;
  }
`;

export const ContactStyle = styled.div`
  margin-top: 80px;
  margin-left: 50px;
  float: right;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 20px;
  }

  @media only screen and (min-width: 769px) {
    text-align: center;
  }
`;

export const TermsTitle = styled.h5`
  color: #fff;
  font-size: 18px;
  margin-bottom: -15px;
  margin-top: -15px;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const BgColor = styled.div`
  background-color: #963;
  color: #fff;
`;

export const TimeStyle = styled.div`
  text-align: right;
  color: #fff;
  margin-top: 30px;
  margin-right: 130px;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-right: -2%;
    margin-bottom: -40px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 1380px) and (min-width: 1340px) {
    text-align: right;
    margin-top: 20px;
    margin-right: 20px;
  }
`;

export const StyledMDBFooter = styled(MDBFooter)`
  background-color: transparent;
  text-align: center;
  opacity: 0.8;

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

  @media only screen and (max-width: 768px) {
    margin-left: 5px;
  }

  @media only screen and (max-width: 1380px) and (min-width: 1340px) {
    justify-content: center;
    text-align: center;
    margin-right: 20px;
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
