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

export const TitleWrapper = styled.div`
  margin-top: 80px;
`;

export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  text-align: center;

  @media (${devices.mobileES}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.mobileS}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.mobileM}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.mobileL}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.tablet}) {
    font-size: 1.5rem;
    padding: 30px;
  }

  @media (${devices.laptop}) {
    font-size: 1.5rem;
    padding: 40px; 
  }

  @media (${devices.laptopL}) {
    font-size: 2rem;
    padding: 50px; 
  }

  @media (${devices.desktop}) {
    font-size: 2rem;
    padding: 50px;
  }

  /* @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 1.5rem;
    padding: 40px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
    padding: 50px;
  } */
`;

export const ImageTitle = styled.img`
  width: 100%;
  max-width: 400px;

  @media (${devices.mobileES}) {
    max-width: 500px;
  }

  @media (${devices.mobileS}) {
    width: 80%;
  }

  @media (${devices.mobileM}) {
    width: 80%;
  }

  @media (${devices.mobileL}) {
    width: 80%;
  }

  @media (${devices.tablet}) {
    width: 70%;
  }

  @media (${devices.laptop}) {
    width: 80%;
  }

  @media (${devices.laptopL}) {
    width: 100%;
    max-width: 400px; 
  }

  @media (${devices.desktop}) {
    width: 100%;
    max-width: 400px;
  }

  /* @media only screen and (max-width: 768px) {
    width: 80%;
    max-width: 500px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    width: 70%;
    max-width: 300px;
  }

  @media only screen and (min-width: 1200px) {
    width: 100%;
    max-width: 400px;
  } */
`;
