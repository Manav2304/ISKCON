import styled from "styled-components";
import { devices } from "../../style";

export const TitleWrapper = styled.div`
  margin-top: 95px;
`;

export const HeadingStyle = styled.h1`
  color: #7e5959;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;

  @media (${devices.mobileES}) {
    margin-top: -28px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileS}) {
    margin-top: -30px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileM}) {
    margin-top: -20px;
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
    line-height: 20px !important;
    letter-spacing: 2px !important;
    margin-bottom: 5px;
  }

  @media (${devices.tablet}) {
    margin-top: -35px;
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
    margin-top: 200px;
    font-weight: 700 !important;
    font-size: 4em !important;
    letter-spacing: 4.5px !important;
    line-height: 40px !important;
    margin-bottom: 10px;
  }
`;
export const ImageTitle = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;

  @media (${devices.mobileES}) {
    width: 60%;
    margin-bottom: 15px;
  }

  @media (${devices.mobileS}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.mobileM}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.mobileL}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.tablet}) {
    width: 40%;
    margin-bottom: 30px;
  }

  @media (${devices.laptop}) {
    width: 40%;
    margin-bottom: 30px;
  }

  @media (${devices.laptopL}) {
    margin-bottom: 30px;
    width: 35%;
  }

  @media (${devices.desktop}) {
    width: 20%;
    margin-bottom: 30px;
  }
`;
