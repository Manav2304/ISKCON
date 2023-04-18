import styled from "styled-components";

export const TextWrapper = styled.div`
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 768px) {
    /* Styles for tablet view */
    padding: 10px;
  }

  @media only screen and (max-width: 480px) {
    /* Styles for mobile view */
    padding: 0.1px;
  }

  @media only screen and (min-width: 1200px) {
    /* Styles for desktop view */
    padding: 30px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleImage = styled.img`
  width: 90%;
  max-width: 600px;
  height: auto;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    width: 70%;
    max-width: 400px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    width: 70%;
    max-width: 300px;
  }

  /* @media only screen and (min-width: 1200px) {
    width: 100%;
    max-width: 400px;
  } */
`;

export const Heading = styled.h1`
  text-align: center;
  color: #7e5959;
  margin-top: 90px;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding-top: 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 2rem;
    padding-top: 40px;
    padding-bottom: 10px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 3rem;
    padding-top: 60px;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
  margin: 40px 50px 50px;
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 768px) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    margin: 25px;
    font-size: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.2rem;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
