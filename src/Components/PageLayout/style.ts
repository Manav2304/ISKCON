import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  padding: 50px;
`;
