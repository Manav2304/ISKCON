import styled from "styled-components";

export const FestivalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin: 50px;
`;

export const FestivalImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
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
   font-size:1rem;
   text-align:center;
`;