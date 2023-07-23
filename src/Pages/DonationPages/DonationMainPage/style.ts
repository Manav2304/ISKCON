import styled from "styled-components";
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardImage,
} from "@coreui/react";
import { devices } from "../../../style";
import { Link } from "react-router-dom";

export const CustomRow = styled(CRow)`
  margin-bottom: 20px;
`;

export const CustomCol = styled(CCol)`
  display: flex;
  flex-direction: column;
`;

export const CustomCard = styled(CCard)`
  height: 100%;
`;

export const CustomCardImage = styled(CCardImage)`
  object-fit: cover;
  height: 200px;
`;

export const CustomCardBody = styled(CCardBody)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CustomCardTitle = styled(CCardTitle)`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
  color: black;
  text-align: center;
`;

export const TextStyle = styled.div`
  text-align: justify;
  color: #ad0d0d;
  line-height: 1.5;
  font-family: "Times New Roman", Times, serif;

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

export const HeadingStyle = styled.h1`
  color: #7e5959;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 4vw;
  margin-bottom: 0;

  @media (${devices.mobileES}) {
    margin-top: 20px;
  }

  @media (${devices.mobileS}) {
    margin-top: 2px;
  }

  @media (${devices.mobileM}) {
    margin-top: 20px;
  }

  @media (${devices.mobileL}) {
    margin-top: 40px;
  }

  @media (${devices.tablet}) {
    margin-top: 30px;
  }

  @media (${devices.laptop}) {
    margin-top: 40px;
  }

  @media (${devices.laptopL}) {
    margin-top: 150px;
  }

  @media (${devices.desktop}) {
    margin-top: 100px;
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
    width: 30%;
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

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ad0d0d;
  }
`;

export const PageWrapper = styled.div`
  margin-top: 150px;
`;
