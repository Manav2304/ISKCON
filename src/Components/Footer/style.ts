import styled from "styled-components";

export const FooterLogoStyle = styled.div`
  width: 500px;
  align-content: center;
  margin: 5px;
  margin-top: 50px;
  margin-left: 85px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const ContactStyle = styled.div`
  margin-top: 110px;
  margin-left: 90px;
  float: right;

  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    margin-top: 20px;
  }
`;

export const BgColor = styled.div`
  background-color: #963;
  color: #ffffff;
`;

export const TimeStyle = styled.div`
  text-align: center;
  color: #ffffff;
  margin-top: 30px;
`;

export const MDBContainer = styled.div`
  text-align: justify;
  background-color: #963;
  color: #ffffff;
`;

export const TermsContainer = styled.div`
  background-color: #963;
  padding: 10px;
`;

export const TermsHeading = styled.h6`
  font-style: bold;
  text-align: center;
  color: #ffffff;
`;

export const PrivacyLink = styled.a`
  color: #ffffff;
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
  color: #ffffff;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const TimingHeading = styled.h3`
  text-align: center;
  color: #ffffff;
`;
