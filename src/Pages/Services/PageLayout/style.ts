import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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

export const ImageSlide = styled.img`
  width: 600px;
  height: 400px;
  object-fit: auto;
  margin-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;

  @media only screen and (max-width: 768px) {
    /* Styles for tablet view */
    width: 400px;
    height: 400px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 480px) {
    /* Styles for mobile view */
    width: 300px;
    height: 300px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1200px) {
    /* Styles for desktop view */
    width: 800px;
    height: 800px;
    margin-bottom: 30px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  padding: 50px;
`;
