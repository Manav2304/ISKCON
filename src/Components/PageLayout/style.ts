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

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleImage = styled.img`
  width: 100%;
  height: auto;

  
  @media (${devices.mobileES}) {
    max-width: 300px;
  }

  @media (${devices.mobileS}) {
    max-width: 300px;
  }

  @media (${devices.mobileM}) {
    max-width: 300px;
  }

  @media (${devices.mobileL}) {
    max-width: 300px;
  }

  @media (${devices.tablet}) {
    max-width: 300px;
  }

  @media (${devices.laptop}) {
    max-width: 300px;
  }

  @media (${devices.laptopL}) {
    max-width: 700px;
  }

  @media (${devices.desktop}) {
    max-width: 700px;
  }
  
/* 
  @media screen and (min-width: 1024px) {
    max-width: 700px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 500px;
  }

  @media screen and (max-width: 767px) {
    max-width: 300px;
  } */
`;

export const Heading = styled.h1`
  text-align: center;
  color: #7e5959;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  padding: 50px;
`;
