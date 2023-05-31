import styled from "styled-components";
import { devices } from "../../../style";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleImage = styled.img`
  width: 100%;
  height: auto;

  @media (${devices.mobileES}) {
    max-width: 300px;
  }

  @media (${devices.mobileS}) {
    max-width: 300px;
  }

  @media (${devices.mobileM}) {
    max-width: 300px;
  }

  @media (${devices.mobileL}) {
    max-width: 300px;
  }

  @media (${devices.tablet}) {
    max-width: 300px;
  }

  @media (${devices.laptop}) {
    max-width: 300px;
  }

  @media (${devices.laptopL}) {
    max-width: 700px;
  }

  @media (${devices.desktop}) {
    max-width: 700px;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  color: #7e5959;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
  padding: 50px;
`;

export const Datestyle = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
  padding: 50px;
`;
