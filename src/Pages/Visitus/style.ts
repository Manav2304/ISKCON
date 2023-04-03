import styled from "styled-components";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const TextWrapper = styled.div`
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleImage = styled.img`
  width: 500px;
  height: auto;
`;

export const Heading = styled.h1`
  text-align: center;
  color: #7e5959;
`;

export const ImageSlide = styled.img`
  width: 600px;
  height: 600px;
  object-fit: auto;
  margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.12rem;
  line-height: 1.5;
  text-align: justify;
  padding: 20px;
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
`;
