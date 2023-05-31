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

export const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain cover;

  @media (${devices.mobileES}) {
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.mobileS}) {
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.mobileM}) {
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.mobileL}) {
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.tablet}) {
    height: 100%;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (${devices.laptop}) {
    height: 100%;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (${devices.laptopL}) {
    height: 100%;
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (${devices.desktop}) {
    height: 100%;
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;
  }
`;
