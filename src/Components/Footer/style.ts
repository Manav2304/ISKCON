import styled from "styled-components";

export const FooterLogoStyle = styled.div`
  width: 500px;
  align-content: center;
`;

export const ContactStyle = styled.div`
  margin-left: 80px;
  margin-top: 50px;

  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    margin-top: 20px;
  }
`;

export const BgColor = styled.div`
  background-color: #996633;
  color: white;

  @media only screen and (max-width: 768px) {
    background-color: #663300;
  }

  @media only screen and (min-width: 1200px) {
    background-color: #cc9966;
  }
`;
