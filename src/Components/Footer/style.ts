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
`;

export const Heading = styled.h6`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 4px;
  margin-left: 130px;

  @media only screen and (max-width: 768px) {
    padding-right: 130px;
    margin-top: -50px;
  }
`;

export const ContactStyle = styled.div`
  margin-top: 80px;
  margin-left: 120px;
  float: right;

  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 20px;
  }
`;

export const TermsTitle = styled.h5`
  color: #fff;
  font-size: 16px;
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

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-right: -2%;
    margin-bottom: -40px;
    margin-top: 20px;
  }
`;

export const MDBContainer = styled.div`
  text-align: justify;
  background-color: #963;
  color: #fff;
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
  margin-left: 35%;

  @media only screen and (max-width: 768px) {
    margin-left: 5px;
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

export const TimingHeading = styled.h3`
  text-align: center;
  color: #fff;
`;
