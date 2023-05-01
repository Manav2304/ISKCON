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

export const FestivalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 80px;
  margin: 20px auto;
  padding: 20px;

  /* @media (${devices.mobileES}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }

  @media (${devices.mobileS}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }

  @media (${devices.mobileM}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }

  @media (${devices.mobileL}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }

  @media (${devices.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }

  @media (${devices.laptop}), (${devices.laptopL}), (${devices.desktop}) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (${devices.laptopL}), (${devices.desktop}) {
    gap: 100px;
  } */

  
  @media (max-width: 479px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }

  @media only screen and (min-width: 1500px) and (max-width: 2000px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 100px;
  }
`;

export const FestivalImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border: 3px solid #963;

  @media (${devices.mobileES}) {
    width: 350px;
    height: 250px;
  }

  @media (${devices.mobileS}) {
    width: 350px;
    height: 250px;
  }

  @media (${devices.mobileM}) {
    width: 350px;
    height: 250px;
  }

  @media (${devices.mobileL}) {
    width: 350px;
    height: 250px;
  }

  @media (${devices.tablet}) {
    width: 350px;
    height: 250px;
  }

  @media (${devices.laptop}) {
    width: 450px;
    height: 300px;
  }

  @media (${devices.laptopL}) {
    width: 100%;
    height: 350px;
    justify-content: center;
  }

  @media (${devices.desktop}) {
    width: 100%;
    height: 350px;
    justify-content: center;
  }

  /* @media (max-width: 768px) {
    width: 350px;
    height: 250px;
  }

  @media (min-width: 992px) {
    width: 450px;
    height: 300px;
    gap: 20px;
  }

  @media only screen and (min-width: 1900px) and (max-width: 2500px) {
    width: 100%;
    height: 350px;
    justify-content: center;
  }

  @media only screen and (min-width: 1700px) and (max-width: 1900px) {
    width: 100%;
    height: 350px;
    justify-content: center;
  } */
`;

export const FestivalInfo = styled.div`
  background-color: transparent;
  padding: 10px;
  text-align: center;
`;

export const Heading2 = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #7e5959;
`;

export const Paragraph1 = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #7e5959;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #7e5959;
  margin: 10px;
`;

export const Button = styled.button`
  background-color: #7e5959;
  color: #fff;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  @media (${devices.mobileES}) {
    font-size: 14px;
  }

  @media (${devices.mobileS}) {
    font-size: 14px;
  }

  @media (${devices.mobileM}) {
    font-size: 14px;
  }

  @media (${devices.mobileL}) {
    font-size: 14px;
  }

  @media (${devices.tablet}) {
    font-size: 14px;
  }

  @media (${devices.laptop}) {
    font-size: 14px;
  }

  @media (${devices.laptopL}) {
    font-size: 14px;
  }

  @media (${devices.desktop}) {
    font-size: 14px;
  }

  /* @media (max-width: 767px) {
    font-size: 14px;
    padding: 8px 16px;
  } */
`;
