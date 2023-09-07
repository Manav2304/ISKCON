import styled from "styled-components";
import { devices } from "../../../style";
import { CardMedia, Typography, CardContent } from "@mui/material";
import { Card } from "react-bootstrap";

export const CardStyle = styled(Card)`
  width: 100%;
  height: 100%;
  background-color: #fcfcfc1a;
  box-shadow: 0 4px 8px 0 #00000045, 0 6px 20px 0 #00000038;
  border-radius: 20px;
  margin: 20px 10px;

  @media (${devices.mobileES}) {
    width: 100%;
    height: 100%;
    margin: 1px 20px;
  }

  @media (${devices.tablet}) {
    width: 100%;
    height: 100%;
  }
`;

// image of card but text is moving accordingly
export const CardMediaStyle = styled(CardMedia)`
  display: flex;
  width: 350px;
  height: 200px;
  margin-top: 31px;
  margin-left: 30px;
  border-radius: 5%;

  @media (${devices.mobileES}) {
    width: 100%;
    height: 160px;
    border-radius: 20px;
    margin-top: 1px;
    margin-left: 1px;
    align-items: center;
  }

  @media (${devices.mobileS}) {
    width: 100%;
    height: 160px;
    border-radius: 20px;
    margin-top: 1px;
    margin-left: 1px;
    align-items: center;
  }

  @media (${devices.mobileM}) {
    width: 100%;
    height: 187.5px;
    border-radius: 20px;
    margin-top: 1px;
    margin-left: 1px;
    align-items: center;
  }

  @media (${devices.mobileL}) {
    width: 100%;
    height: 212.5px;
    border-radius: 20px;
    margin-top: 1px;
    margin-left: 1px;
    align-items: center;
  }

  @media (${devices.tablet}) {
    width: 350px;
    height: 192px;
    margin-top: 31px;
    margin-left: 30px;
    border-radius: 5%;
  }
`;

export const TypoGraphy = styled(Typography)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #ad0d0d;
`;

// texts in card
export const CardContentStyle = styled(CardContent)`
  @media (${devices.tablet}) {
    margin-left: 380px;
    margin-top: -150px;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 10px 20px;

  @media (${devices.laptopL}) {
    margin: 10px 120px;
  }
`;

export const TypoGraphyMain = styled.p`
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #ad0d0d;
  font-size: 1.5rem;
`;
