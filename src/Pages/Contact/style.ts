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
  max-width: 400px;
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
  max-width: 400px;
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

export const MapFrame = styled.iframe`
  border: none;
  align-items: center;
  height: 350px;
  width: 100%;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 2rem;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-left: 107px;
    padding-right: 107px;
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
  margin-top: 110px;

  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2.5rem;
    padding-top: 20px;
  }
`;
export const BoxStyle = styled.div`
  align-items: center;
  border: none;
  width: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media only screen and (max-width: 767px) {
    align-self: center;
    width: auto;
    padding-left: 7%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    // Styles for medium screens
    align-items: center;
  }

  @media only screen and (min-width: 1024px) {
    // Styles for large screens
    align-items: center;
  }
`;

export const BoxHeading = styled.h2`
  margin-bottom: 10px;
  font-family: "Times New Roman", Times, serif;
`;

export const BoxDetail = styled.p`
  font-family: "Times New Roman", Times, serif;
`;
