import styled from "styled-components";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 767px) {
    padding: 10px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 20px 40px;
  }

  @media (min-width: 992px) {
    padding: 20px 80px;
  }
`;

export const TextWrapper = styled.div`
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Heading = styled.h1`
  text-align: center;
  color: #7e5959;
  margin-top: 20px;
`;

export const TitleImage = styled.img`
  width: 500px;
  height: auto;

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
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 767px) {
    font-size: 16px;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 18px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: 992px) {
    font-size: 20px;
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
