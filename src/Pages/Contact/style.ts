import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
  max-width: 1200px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-left: 10px;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-family: "Times New Roman", Times, serif;
  align-content: center;
  text-align: center;
  font-style: bold;
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

  h4 {
    margin-bottom: 10px;
    font-family: "Times New Roman", Times, serif;
  }

  p {
    font-family: "Times New Roman", Times, serif;
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: none;
    align-items: center;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: none;
    grid-column: 1 / -1;
    align-items: center;
    margin-left: 10px;
  }
`;

export const GuestHouseInfo = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const MapContainer = styled.div`
  margin-bottom: 20px;
  grid-column: 1 / span 2;
  align-items: center;

  h4 {
    margin-bottom: 10px;
  }
`;

export const MapFrame = styled.iframe`
  border: none;
  height: 350px;
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 350px;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    width: 1160px;
    margin-left: 2px;
    margin-right: 2px;
  }
`;

export const TitleBaseImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBaseImg = styled.img`
  width: 500px;
  height: 60px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 769px) {
    width: 60%;
    max-width: 50%;
  }
`;
