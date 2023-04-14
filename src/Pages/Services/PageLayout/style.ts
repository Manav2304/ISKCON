import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
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
  margin-bottom: 20px;
`;

export const TitleImage = styled.img`
  width: 100%;
  height: auto;

  @media screen and (min-width: 1024px) {
    max-width: 700px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 500px;
  }

  @media screen and (max-width: 767px) {
    max-width: 300px;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  color: #7e5959;
  padding-top: 100px;
`;

export const Paragraph = styled.p`
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
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
