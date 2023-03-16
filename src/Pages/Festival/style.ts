import styled from "styled-components";

export const FestivalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin: 100px;
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
export const Button = styled.div`
color: #800000;
`;
