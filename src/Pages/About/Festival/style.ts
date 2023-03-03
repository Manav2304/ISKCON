import styled from "styled-components";

export const FestivalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px;
`;

export const FestivalImage = styled.img`
  width: 70;
  height: 250px;
  object-fit: cover;
`;

export const FestivalInfo = styled.div`
  background-color: #fff;
  padding: 10px;
  text-align: center;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #666;
  }
`;
