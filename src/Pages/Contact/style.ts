import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
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
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: none;
    grid-column: 1 / -1;
  }
`;

export const GuestHouseInfo = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const MapContainer = styled.div`
  margin-bottom: 20px;
  grid-column: 1 / span 2;

  h4 {
    margin-bottom: 10px;
  }
`;

export const MapFrame = styled.iframe`
  border: none;
  height: 350px;
  width: 100%;

  @media (min-width: 768px) {
    width: 1150px;
  }
`;

export const TitleBaseImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBaseImgSize = styled.img`
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
