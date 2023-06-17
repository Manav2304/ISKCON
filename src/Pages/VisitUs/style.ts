import styled from "styled-components";
import { devices } from "../../style";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;
`;

export const Paragraph = styled.p`
  text-align: justify;
  color: #ad0d0d;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  @media (${devices.mobileES}) {
    font-size: 0.8rem;
    margin: 30px 20px;
  }

  @media (${devices.mobileS}) {
    font-size: 0.8rem;
    margin: 30px 20px;
  }

  @media (${devices.mobileM}) {
    margin: 30px;
    font-size: 1.2rem;
  }

  @media (${devices.mobileL}) {
    margin: 30px 25px;
    font-size: 1.3rem;
  }

  @media (${devices.tablet}) {
    margin: 30px 40px;
    font-size: 1.8rem;
  }

  @media (${devices.laptop}) {
    margin: 30px 120px;
    font-size: 1.5rem;
  }

  @media (${devices.laptopL}) {
    margin: 50px 105px;
    font-size: 1.8rem;
  }

  @media (${devices.desktop}) {
    margin: 50px 120px;
    font-size: 3rem;
  }
`;

export const HiddenParagraph = styled.p`
  display: none;
`;

export const VisibleParagraph = styled.p`
  display: block;
`;
