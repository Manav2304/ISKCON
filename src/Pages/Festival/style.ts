import styled from "styled-components";

export const FestivalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 80px;
  margin: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 40px;
    margin: 20px;
  }
`;

export const FestivalImage = styled.img`
  width: 470px;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

export const FestivalInfo = styled.div`
  background-color: transparent;
  padding: 10px;
  text-align: center;
`;

export const Heading2 = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export const Paragraph1 = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #666;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px;
`;

export const Heading1 = styled.h1`
  font-size: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleImage = styled.img`
  width: 500px;
  height: 60px;

  @media (max-width: 768px) {
    width: 400px;
    height: 48px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 36px;
  }
`;

export const ButtonStyle = styled.div`
  color: transparent;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
`;