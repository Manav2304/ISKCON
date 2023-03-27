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
    width: 100%;
    max-width: none;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: none;
    grid-column: 1 / -1; /* this will span the Box to occupy the full width of the grid */
  }
`;

export const GuestHouseInfo = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const MapContainer = styled.div`
  margin-bottom: 20px;
  grid-column: 1 / span 2;

  h4 {
    margin-bottom: 10px;
  }
`;
