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

export const HeadingStyle = styled.h1`
  color: #7e5959;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;

  @media (${devices.mobileES}) {
    margin-top: -24px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileS}) {
    margin-top: -20px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileM}) {
    margin-top: -12px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileL}) {
    margin-top: 40px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 30px !important;
    letter-spacing: 2px !important;
    margin-bottom: 5px;
  }

  @media (${devices.tablet}) {
    margin-top: -6px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 40px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.laptop}) {
    margin-top: 55px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.laptopL}) {
    margin-top: 55px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.desktop}) {
    margin-top: 100px;
    font-weight: 700 !important;
    font-size: 4em !important;
    letter-spacing: 4.5px !important;
    line-height: 40px !important;
    margin-bottom: 10px;
  }
`;

export const HeadingStyle1 = styled.h1`
  color: #7e5959;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;

  @media (${devices.mobileES}) {
    margin-top: 10px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileS}) {
    margin-top: 20px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileM}) {
    margin-top: 20px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileL}) {
    margin-top: 40px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 30px !important;
    letter-spacing: 2px !important;
    margin-bottom: 5px;
  }

  @media (${devices.tablet}) {
    margin-top: 30px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 40px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.laptop}) {
    margin-top: 55px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.laptopL}) {
    margin-top: 15px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.desktop}) {
    margin-top: 100px;
    font-weight: 700 !important;
    font-size: 4em !important;
    letter-spacing: 4.5px !important;
    line-height: 40px !important;
    margin-bottom: 10px;
  }
`;