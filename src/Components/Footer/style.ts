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
  margin-top: 50px;
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
  text-align: justify;
  color: #ffffff;
`;

export const MDBContainer = styled.div`
  text-align: justify:
  background-color: #963;
  color: #ffffff;
 `;

export const TermsHeading = styled.h6`
  font-style: bold;
  text-align: center;
`;
