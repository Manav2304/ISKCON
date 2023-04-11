import styled from "styled-components";

export const FooterLogoStyle = styled.div`
  width: 500px;
  align-content: center;
  margin: 5px;
  margin-top: 50px;
  margin-right: 46px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: -1px;
  }
`;

export const Heading = styled.h6`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 4px;
  margin-left: 80px;

  @media only screen and (max-width: 768px) {
    margin-right: 100px;
    margin-top: -50px;
  }
`;

export const ContactStyle = styled.div`
  margin-top: 110px;
  margin-left: 90px;
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
  text-align: center;
  color: #fff;
  margin-top: 30px;
  margin-right: 90px;

  @media only screen and (max-width: 768px) {
    margin-right: 3px;
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
