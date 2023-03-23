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
  background-color: #fff;
  padding: 10px;
  text-align: center;
`;

export const HeadIng2 = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export const ParaGraph1 = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #666;
`;

export const Button = styled.div`
  color: #800000;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px;
`;

export const HeadIng1 = styled.h1`
  font-size: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
  
`;
