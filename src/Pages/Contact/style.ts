import styled from "styled-components";

export const Container = styled.div`
  margin: 5px;
`;

export const Box = styled.div`
  padding: 20px;
  border: 1px solid #fb3cca;
  border-radius: 5px;
  background-color: #ffa9a9;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 150px;
  max-width: 300px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    width: 100%;
    max-width: none;
    align-items: center;
  }

  @media (max-width: 767px) {
    width: 285px;
    max-width: none;
    grid-column: 1 / -1;
    align-items: center;
    margin-left: 4px;
  }
`;

export const GuestBox = styled.div`
  padding: 20px;
  border: 1px solid #fb3cca;
  border-radius: 5px;
  background-color: #ffa9a9;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 150px;
  max-width: 300px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    width: 100%;
    max-width: none;
    align-items: center;
  }

  @media (max-width: 767px) {
    width: 285px;
    max-width: none;
    grid-column: 1 / -1;
    align-items: center;
    margin-left: 4px;
    height: 235px;
  }
`;

export const GuestHouseInfo = styled.p`
  margin: 0;
  font-weight: bold;
`;
export const MapFrame = styled.iframe`
  border: none;
  height: 350px;
  width: 100%;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 2rem;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 3rem;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const TitleBaseImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBaseImg = styled.img`
  width: 100%;
  max-width: 400px;

  @media only screen and (max-width: 768px) {
    width: 70%;
    max-width: 200px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    width: 70%;
    max-width: 300px;
  }

  @media only screen and (min-width: 1200px) {
    width: 100%;
    max-width: 400px;
  }
`;
export const Heading = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 3rem;
  }
`;
export const BoxStyle = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const BoxHeading = styled.h2`
  margin-bottom: 10px;
  font-family: "Times New Roman", Times, serif;
`;

export const BoxDetail = styled.p`
  font-family: "Times New Roman", Times, serif;
`;
