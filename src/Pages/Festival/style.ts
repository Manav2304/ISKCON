import styled from "styled-components";

export const FestivalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20x;
  margin: 100px;
`;

export const FestivalImage = styled.img`
  width: 150;
  height: 350px;
  object-fit: cover;

`;

export const FestivalInfo = styled.div`
  background-color: #fff;
  padding: 10px;
  text-align: center;

  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #666;
    
  }
`;



