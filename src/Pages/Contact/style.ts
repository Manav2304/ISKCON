import styled from "styled-components";

export const Container = styled.div`
  margin: 5px;
`;

export const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ff007f;
  }
`;

export const Box = styled.div`
  padding: 20px;
  border: 3px solid #fff;
  border-radius: 5px;
  background-color: #963;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 150px;
  max-width: 300px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    width: auto;
    max-width: none;
    align-items: center;
  }
  @media (max-width: 767px) {
    width: auto;
    max-width: none;
    grid-column: -3 / 3;
    align-items: center;
    margin-left: 7px;
    margin-right: 7px;
  }
`;

export const GuestBox = styled.div`
  padding: 20px;
  border: 3px solid #fff;
  border-radius: 5px;
  background-color: #963;
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
    font-size: 13px;
  }
  @media (max-width: 767px) {
    width: auto;
    max-width: none;
    grid-column: -3 / 3;
    align-items: center;
    height: 235px;
    margin-left: 7px;
    margin-right: 7px;
  }
`;

export const MapFrame = styled.iframe`
  height: 500px;
  width: 100%;
  margin-top: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 50px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 2rem;
    margin-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 3rem;
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
  margin-bottom: 30px;

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
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 20px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    justify-content: center;
  }
`;

export const BoxHeading = styled.h2`
  margin-bottom: 5px;
  font-family: "Times New Roman", Times, serif;
  color: #fff;
`;

export const BoxDetail = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  color: #fff;
`;
