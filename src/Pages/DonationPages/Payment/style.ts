import styled from "styled-components";
import { devices } from "../../../style";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { Card } from "react-bootstrap";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: transparent;
  margin-top: 115px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background: transparent;

  @media (${devices.mobileES}) {
    margin-bottom: 20px;
  }

  @media (${devices.mobileS}) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    background: transparent;
  }

  @media (${devices.mobileM}) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    background: transparent;
  }

  @media (${devices.mobileL}) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    background: transparent;
  }

  @media (${devices.tablet}) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    background: transparent;
  }

  @media (${devices.laptop}) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    background: transparent;
    margin-top: 20px;
  }

  @media (${devices.laptopL}) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    background: transparent;
    margin-top: 20px;
  }

  @media (${devices.desktop}) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    background: transparent;
    margin-top: 20px;
  }
`;

export const DonationHeader = styled.th`
  font-weight: bold;
  font-size: 2rem;
  padding: 10px;
  text-align: ceter;
  background-color: #fcfcfc1a;
  box-shadow: 0 4px 8px 0 #00000045, 0 6px 20px 0 #00000038;

  @media (${devices.mobileES}) {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    padding: 1px;
  }

  @media (${devices.mobileS}) {
    font-weight: bold;
    font-size: 1rem;
    text-align: left;
    padding: 10px;
  }

  @media (${devices.mobileM}) {
    font-weight: bold;
    font-size: 1.5rem;
    text-align: left;
    padding: 10px;
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

export const TableHeader = styled.th`
  font-weight: bold;
  border-bottom: 0.3rem solid #a0522d;

  @media (${devices.mobileES}) {
    font-weight: bold;
    text-align: center;
    border-bottom: 0.3rem solid #a0522d;
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

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: transparent;
  }
`;

export const TableCell = styled.td`
  color: #333;
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  position: relative;

  &:first-child {
    font-weight: bold;
  }

  @media (${devices.mobileES}) {
    padding: 8px;
    font-size: 14px;
  }

  @media (${devices.mobileS}) {
    padding: 8px;
    font-size: 14px;
  }

  @media (${devices.mobileM}) {
    padding: 8px;
    font-size: 14px;
  }

  @media (${devices.mobileL}) {
    padding: 8px;
    font-size: 14px;
  }

  @media (${devices.tablet}) {
    padding: 12px;
    font-size: 16px;
  }

  @media (${devices.laptop}) {
    padding: 16px;
    font-size: 18px;
    border-bottom: none;
    border-right: 1px solid #ddd;

    &:last-child {
      border-right: none;
    }
  }

  @media (${devices.laptopL}) {
    padding: 16px;
    font-size: 20px;
  }

  @media (${devices.desktop}) {
    padding: 20px;
    font-size: 22px;
  }
`;

export const Button = styled.button`
  background-color: #800000;
  color: #f5deb3;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  gap: 10px;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const TableCelltotal = styled.td`
  width: 100px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  width: 50%;
  margin-left: 10px;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #07f;
  }
`;

export const NameInput = styled.form`
  color: #a52a2a;
`;

export const PhoneInput = styled.form`
  color: #a52a2a;
`;

export const EmailInput = styled.form`
  color: #a52a2a;
`;
export const Container1 = styled.div`
  margin-top: 100px;
  text-align: center;
`;

export const Wrapper = styled.div`
  margin-top: -130px;
`;

export const INPUT = styled.input`
  display: flex;
  justify-content: end;
`;

export const TableFoot = styled.tfoot`
  align-items: space-around;
`;

export const Labelstyle = styled.label`
  width: 100%;
  margin-top: 50px;
  margin-left: 20px;
`;

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
  width: 125px;
  overflow-x: auto;

  @media (${devices.mobileES}) {
    width: 240px;
  }

  @media (${devices.mobileS}) {
    width: 300px;
  }

  @media (${devices.mobileM}) {
    width: 350px;
  }

  @media (${devices.mobileL}) {
    width: 320px;
  }

  @media (${devices.tablet}) {
    width: 100%;
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

export const TableWrapper = styled.tbody`
  max-width: 100%; /* Use full width on larger screens */

  @media (${devices.mobileL}) {
    margin: 10px 120px;
  }
`;

export const CopyButton = styled.button<{ copied: boolean }>`
  margin-left: 1rem;
  padding: 0.5rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #630063;
  }

  &:active {
    background-color: #fffffcf4;
  }
`;

export const TableRowCard = styled.tr`
  &:nth-child(even) {
    background-color: #f4c2c2;
  }
`;

export const TableCellCard = styled.td`
  border: 1px solid #7e5959;
  padding: 0.5rem;
  text-align: left;
  width: 50px;

  @media (${devices.mobileL}) {
    width: 2000px;
  }
`;
