import styled from "styled-components";
import { devices } from "../../style";

export const Container = styled.div`
  margin: 5px;
`;

export const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #800000;
  }
`;

export const Box = styled.div`
  padding: 20px;
  border: 3px solid #fff;
  border-radius: 5px;
  background-color: #963;
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
  border: 3px solid #fff;
  border-radius: 5px;
  background-color: #963;
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
  margin-bottom: 5px;
  font-family: "Times New Roman", Times, serif;
  color: #fff;
`;

export const BoxDetail = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;
  color: #fff;
`;


export const HeadingStyle = styled.h1`
  color: #7e5959;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;

  @media (${devices.mobileES}) {
    margin-top: 20px;
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
    margin-top: 135px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.laptopL}) {
    margin-top: 135px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.desktop}) {
    margin-top: 145px;
    font-weight: 700 !important;
    font-size: 4em !important;
    letter-spacing: 4.5px !important;
    line-height: 40px !important;
    margin-bottom: 10px;
  }
`;