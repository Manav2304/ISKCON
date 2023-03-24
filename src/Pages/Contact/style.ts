import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Box = styled.div`
  padding: 20px;
  border: 1px solid #fb3cca;
  border-radius: 5px;
  background-color: #ffa9a9;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 300px;

  h4 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    width: auto;
    max-width: none;
  }

  @media (max-width: 767px) {
    grid-column: 1 / span 1;
  }
`;

export const GuestHouseInfo = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const MapContainer = styled.div`
  margin-bottom: 20px;

  h4 {
    margin-bottom: 10px;
  }

  iframe {
    width: 100%;
    height: 400px;
    border: none;
  }

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
  }
`;
