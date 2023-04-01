import styled from "styled-components";

export const ImageStyle = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }

  @media only screen and (min-width: 769px) {
    max-width: 100%;
    max-height: 100%;
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
  padding: 60px;
  text-align: center;
  margin: 40px;

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
    padding: 20px;
    margin: 20px;
  }

  @media only screen and (min-width: 481px) and (max-width: 767px) {
    font-size: 2rem;
    padding: 40px;
    margin: 30px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
    padding: 60px;
    margin: 40px;
  }
`;

export const Image = styled.img`
  width: 50%;

  @media only screen and (max-width: 480px) {
    max-width: 100%;
  }

  @media only screen and (min-width: 481px) {
    max-width: 100%;
  }
`;
