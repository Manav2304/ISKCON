import styled from "styled-components";
import { devices } from "../../style";

export const TitleWrapper = styled.div`
  margin-top: 80px;
`;

export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  text-align: center;

  @media (${devices.mobileES}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.mobileS}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.mobileM}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.mobileL}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.tablet}) {
    font-size: 1.5rem;
    padding: 30px;
  }

  @media (${devices.laptop}) {
    font-size: 1.5rem;
    padding: 40px; 
  }

  @media (${devices.laptopL}) {
    font-size: 2rem;
    padding: 50px; 
  }

  @media (${devices.desktop}) {
    font-size: 2rem;
    padding: 50px;
  }
`;

export const ImageTitle = styled.img`
  width: 100%;
  max-width: 400px;

  @media (${devices.mobileES}) {
    max-width: 500px;
  }

  @media (${devices.mobileS}) {
    width: 80%;
  }

  @media (${devices.mobileM}) {
    width: 80%;
  }

  @media (${devices.mobileL}) {
    width: 80%;
  }

  @media (${devices.tablet}) {
    width: 70%;
  }

  @media (${devices.laptop}) {
    width: 80%;
  }

  @media (${devices.laptopL}) {
    width: 100%;
    max-width: 400px; 
  }

  @media (${devices.desktop}) {
    width: 100%;
    max-width: 400px;
  }
`;
