import styled from "styled-components";

export const ImageStyle = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    max-height: 100%;
    height: auto;
  }

  @media only screen and (min-width: 769px) {
    max-height: 100%;
    height: auto;
  }
`;


export const TextStyle = styled.div`
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 0.8rem;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media only screen and (min-width: 481px) and (max-width: 767px) {
    font-size: 1rem;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  padding: 10px;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
    padding: 10px;
  }

  @media only screen and (min-width: 481px) and (max-width: 767px) {
    font-size: 2rem;
    padding: 10px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
    padding: 10px;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 480px) {
    max-width: 100%;
  }

  @media only screen and (min-width: 481px) {
    max-width: 100%;
  }
`;

