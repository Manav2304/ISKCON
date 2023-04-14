import styled from "styled-components";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 20px;
`;

export const TextWrapper = styled.div`
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  text-align: center;
  color: #7e5959;
  margin-top: 40px;
`;

export const TitleImage = styled.img`
  width: 500px;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
  }
`;

export const ImageSlide = styled.img`
  width: 600px;
  height: 600px;
  object-fit: auto;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
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

export const HiddenParagraph = styled.p`
  display: none;
`;

export const VisibleParagraph = styled.p`
  display: block;
`;

export const Button = styled.button`
  background-color: #7e5959;
  color: #0c090a;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;
