import styled from "styled-components";
import { devices } from "../../style";

export const Container = styled.div`
  margin: 5px;
`;

export const Box = styled.div`
  padding: 20px;
  border: 1px solid #fb3cca;
  border-radius: 5px;
  background-color: #ffa9a9;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 150px;
  max-width: 800px;
  margin-bottom: 5px;
`;

export const GuestBox = styled.div`
  padding: 20px;
  border: 1px solid #fb3cca;
  border-radius: 5px;
  background-color: #ffa9a9;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 150px;
  max-width: 800px;
  margin-bottom: 5px;
`;

export const MapFrame = styled.iframe`
  height: 400px;
  width: 100%;
  padding: 20px;
`;

export const BoxStyle = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 20px;
  align-items: center;
  padding: 20px;

  @media (${devices.mobileES}) {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
   }

   @media (${devices.mobileS}) {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    align-items: center;
   }

   @media (${devices.mobileM}) {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
     }

  @media (${devices.mobileL}) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
   }

   @media (${devices.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    }

   @media (${devices.laptop}) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
   }

  @media (${devices.laptopL}) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
   }
`;

export const BoxHeading = styled.h2`
  margin-bottom: 10px;
  font-family: "Times New Roman", Times, serif;
`;

export const BoxDetail = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;
`;
