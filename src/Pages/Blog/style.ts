import styled from "styled-components";
import { devices } from "../../style";

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (${devices.mobileES}) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (${devices.mobileS}) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (${devices.mobileM}) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (${devices.mobileL}) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (${devices.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (${devices.laptop}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  @media (${devices.laptopL}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 100px;
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 100px;

  @media (${devices.mobileES}) {
    height: 150px;
  }

  @media (${devices.mobileS}) {
    height: 190px;
  }

  @media (${devices.mobileM}) {
    height: 190px;
  }

  @media (${devices.mobileL}) {
    height: 190px;
  }

  @media (${devices.tablet}) {
    height: 190px;
  }

  @media (${devices.laptop}) {
    height: 220px;
  }

  @media (${devices.laptopL}) {
    width: 100%;
    height: 300px;
  }

  @media (${devices.desktop}) {
    width: 100%;
    height: 70%;
  }
`;

export const BlogInfo = styled.div`
  background-color: transparent;
  padding: 10px;
  text-align: center;
`;

export const Heading2 = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #7e5959;
`;

export const Paragraph1 = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #7e5959;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #7e5959;
  margin: 10px;
`;

export const Button = styled.button`
  background-color: #7e5959;
  color: #fff;
  font-size: 14px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;
