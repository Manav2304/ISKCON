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
  color: #7e5959;
  box-shadow: 0 4px 8px 0 #00000045, 0 6px 20px 0 #00000038;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

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
  color: #7e5959;

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
  color: #ad0d0d;
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
    overflow-x: auto;

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
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s; /* Add smooth transitions for a polished effect */

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #07f;
    box-shadow: 0 0 10px rgb(0 0 255 / 50%);
  }

  &:hover {
    background-color: #f5f5f5; /* Lighten the background color on hover */
  }

  /* Adjust the styles for smaller screens */
  @media (${devices.mobileES}) {
    width: 21%;
    font-size: 14px;
  }

  @media (${devices.mobileS}) {
    width: 35%;
  }

  @media (${devices.mobileM}) {
    width: 40%;
  }

  @media (${devices.mobileL}) {
    width: 55%;
  }

  @media (${devices.tablet}) {
    width: 65%;
  }

  @media (${devices.laptop}) {
    width: 65%;
  }

  @media (${devices.laptopL}) {
    width: 65%;
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

export const TableFoot = styled.tfoot`
  align-items: space-around;
`;

export const Labelstyle = styled.label`
  margin-left: 20px;
  margin-right: 10px;
  font-weight: bold;

  @media (${devices.tablet}) {
    width: 50%;
    margin-left: 10px;
  }
`;

export const CardStyle = styled(Card)`
  background-color: #fcfcfc1a;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 45%), 0 6px 20px 0 rgb(0 0 0 / 38%);
  border-radius: 20px;
  margin-bottom: 20px;

  @media (${devices.mobileES}) {
    width: 100%;
    margin: 1px 20px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 45%), 0 6px 20px 0 rgb(0 0 0 / 38%);
  }

  @media (${devices.tablet}) {
    width: calc(100% - 20px); /* 50% width with 20px gap */
    margin: 1px 20px;
  }

  @media (${devices.laptop}) {
    width: calc(100% - 20px); /* 33.33% width with 20px gap */
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 10px;
  }
`;

export const TypoGraphy = styled(Typography)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #ad0d0d;
`;

// texts in card
export const CardContentStyle = styled(CardContent)`
  width: 100%;

  @media (${devices.mobileES}) {
    width: 275px;
    overflow-x: auto;
  }

  @media (${devices.mobileS}) {
    width: 335px;
  }

  @media (${devices.mobileM}) {
    width: 382px;
  }

  @media (${devices.mobileL}) {
    width: 535px;
    overflow-x: hidden;
  }

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.laptop}) {
    width: 100%;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1px;
  margin: 10px 1px;

  @media (${devices.laptop}) {
    flex-wrap: nowrap;
  }

  @media (${devices.laptopL}) {
    margin: 10px 120px;
  }
`;

export const TypoGraphyMain = styled.p`
  text-align: center;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #7e5959;
  font-size: 1.5rem;

  @media (${devices.mobileES}) {
    font-size: 1rem;
  }

  @media (${devices.mobileS}) {
    font-size: 1rem;
  }

  @media (${devices.mobileM}) {
    font-size: 1.1rem;
  }

  @media (${devices.mobileL}) {
    font-size: 1.2rem;
  }

  @media (min-width: 500px) {
    margin-left: 100px;
  }

  @media (${devices.tablet}) {
    margin-left: -40px;
    font-size: 1.5rem;
  }

  @media (${devices.laptop}) {
    margin-left: -24px;
    font-size: 1.3rem;
  }
`;

export const TableWrapper = styled.tbody`
  max-width: 100%; /* Use full width on larger screens */
  text-align: centre;
  color: #ad0d0d;

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

export const BankInfoContainer = styled.div`
  margin: 1px 350px; /* Center horizontally */
  background-color: transparent; /* Transparent background */

  @media (${devices.mobileES}) {
    margin: 1px 20px;
  }

  @media (${devices.mobileS}) {
    margin: 1px 10px;
  }

  @media (${devices.mobileM}) {
    margin: 1px 10px;
  }

  @media (min-width: 437px) {
    margin: 1px 31px;
  }

  @media (min-width: 463px) {
    margin: 1px 32px;
  }

  @media (min-width: 470px) {
    margin: 1px 45px;
  }

  @media (${devices.mobileL}) {
    margin: 1px 10px;
  }

  @media (min-width: 500px) {
    margin-left: 80px;
  }

  @media (min-width: 575px) {
    margin-left: 50px;
    width: 100%;
  }

  @media (${devices.tablet}) {
    margin: 1px 127px;
  }

  @media (${devices.laptop}) {
    margin: 1px -14px;
  }

  @media (${devices.laptopM}) {
    margin: 1px;
  }

  @media (${devices.laptopL}) {
    margin: 1px;
    margin-top: 5px;
  }

  @media (${devices.desktop}) {
    margin: 1px;
  }
`;

export const BankInfoTitle = styled.h1`
  font-size: 24px;
`;

export const InfoItem = styled.div`
  margin-bottom: 10px;
`;

export const Label1 = styled.p`
  font-weight: bold;
  font-size: 16px;

  @media (${devices.laptop}) {
    font-size: 14px;
    width: 60%;
  }
`;

export const Value = styled.p`
  font-size: 16px;
  margin-top: 5px;

  @media (${devices.mobileES}) {
    font-size: 16px;
    margin-top: -40px;
    margin-left: 150px;
  }

  @media (${devices.laptop}) {
    font-size: 14px;
    margin-top: -40px;
    margin-left: 126px;
    width: 60%;
  }
`;

export const CopyImg = styled.img`
  height: 10px;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: -693px;
  margin-left: 225px;

  &:hover {
    filter: brightness(1.2); /* Increase brightness on hover */
  }

  &:active {
    transform: scale(0.95); /* Slightly reduce size on click */
  }

  @media (${devices.mobileES}) {
    margin-top: -775px;
    margin-left: 200px;
    height: 20px;
  }

  @media (${devices.mobileS}) {
    margin-top: -680px;
    margin-left: 270px;
    height: 20px;
  }

  @media (${devices.mobileM}) {
    margin-top: -639px;
    margin-left: 315px;
    height: 20px;
  }

  @media (${devices.mobileL}) {
    margin-top: -694px;
    margin-left: 283px;
    height: 20px;
  }

  @media (min-width: 470px) {
    margin-top: -780px;
    margin-left: 261px;
    height: 20px;
  }

  @media (min-width: 500px) {
    margin-top: -779px;
    margin-left: 236px;
    height: 20px;
  }

  @media (min-width: 575px) {
    margin-top: -540px;
    margin-left: 294px;
    height: 20px;
  }

  @media (${devices.tablet}) {
    margin-top: -503px;
    margin-left: 415px;
    height: 20px;
  }

  @media (min-width: 880px) {
    margin-top: -505px;
    margin-left: 400px;
    height: 20px;
  }

  @media (min-width: 947px) {
    margin-top: -505px;
    margin-left: 432px;
    height: 20px;
  }

  @media (${devices.laptop}) {
    margin-top: -557px;
    margin-left: 235px;
    height: 20px;
  }

  @media (min-width: 1105px) {
    margin-top: -561px;
    margin-left: 263px;
    height: 20px;
  }

  @media (min-width: 1108px) {
    margin-top: -561px;
    margin-left: 263px;
    height: 20px;
  }

  @media (min-width: 1172px) {
    margin-top: -520px;
    margin-left: 285px;
    height: 20px;
  }

  @media (min-width: 1258px) {
    margin-top: -480px;
    margin-left: 305px;
    height: 20px;
  }

  @media (min-width: 1274px) {
    margin-top: -480px;
    margin-left: 305px;
    height: 20px;
  }

  @media (min-width: 1337px) {
    margin-top: -480px;
    margin-left: 341px;
    height: 20px;
  }

  @media (${devices.laptopM}) {
    margin-top: -480px;
    margin-left: 332px;
    height: 20px;
  }

  @media (${devices.laptopL}) {
    margin-top: -525px;
    margin-left: 275px;
    height: 20px;
  }

  @media (min-width: 1500px) {
    margin-top: -489px;
    margin-left: 300px;
    height: 20px;
  }

  @media (min-width: 1602px) {
    margin-top: -489px;
    margin-left: 309px;
    height: 20px;
  }

  @media (min-width: 1665px) {
    margin-top: -500px;
    margin-left: 315px;
    height: 20px;
  }

  @media (min-width: 2000px) {
    margin-top: -485px;
    margin-left: 444px;
    height: 20px;
  }

  @media (min-width: 2221px) {
    margin-top: -500px;
    margin-left: 455px;
    height: 20px;
  }

  @media (${devices.desktop}) {
    margin-top: -443px;
    margin-left: 627px;
    height: 20px;
  }
`;

export const BarcodeImgStyle = styled(CardMedia)`
  max-width: 100px; /* Set a maximum width for barcode */
  height: 160px;

  @media (${devices.mobileES}) {
    max-width: 150px; /* Set a maximum width for barcode */
    height: 150px;
    margin-left: 50px;
    margin-top: 10px;
  }

  @media (${devices.mobileS}) {
    max-width: 150px; /* Set a maximum width for barcode */
    height: 150px;
    margin-left: 75px;
    margin-top: 20px;
  }

  @media (${devices.mobileM}) {
    max-width: 150px; /* Set a maximum width for barcode */
    height: 150px;
    margin-left: 100px;
    margin-top: 20px;
  }

  @media (${devices.mobileL}) {
    max-width: 150px; /* Set a maximum width for barcode */
    height: 150px;
    margin-left: 100px;
    margin-top: 20px;
  }

  @media (${devices.tablet}) {
    max-width: 150px; /* Set a maximum width for barcode */
    height: 150px;
    margin-left: 230px;
    margin-top: 20px;
  }

  @media (${devices.laptop}) {
    max-width: 213px; /* Set a maximum width for barcode */
    height: 212px;
    margin-left: 1px;
    margin-top: 20px;
  }

  @media (${devices.laptopM}) {
    max-width: 213px; /* Set a maximum width for barcode */
    height: 212px;
    margin-left: 1px;
    margin-top: 20px;
  }

  @media (${devices.laptopL}) {
    max-width: 213px; /* Set a maximum width for barcode */
    height: 212px;
    margin-left: 30px;
    margin-top: 30px;
  }

  @media (${devices.desktop}) {
    max-width: 213px; /* Set a maximum width for barcode */
    height: 212px;
    margin-left: 200px;
    margin-top: 30px;
  }
`;

export const DonateButton = styled.button`
  padding: 12px 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 10px;
  width: 38%;
  margin-left: 10%;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

export const DonateButton1 = styled.button`
  padding: 12px 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 10px;
  width: 38%;
  margin-left: 2%;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

export const LabelWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 20px rgb(0 0 20 / 50%);
  padding: 20px;
  background-color: white;
  margin-top: 20px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.laptop}) {
    margin-left: -110px;
    width: 128%;
  }

  @media (${devices.laptopL}) {
    margin-left: -190px;
    width: 150%;
  }

  @media (${devices.laptopL}) {
    margin-left: -190px;
    width: 150%;
  }

  @media (${devices.desktop}) {
    margin-left: -750px;
    width: 298%;
  }
`;

export const LabelWrapper1 = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 20px rgb(0 0 20 / 50%);
  padding: 20px;
  background-color: white;
  display: flex;
  align-items: center;

  @media (${devices.tablet}) {
    margin-left: 8px;
    width: 98%;
  }

  @media (${devices.laptop}) {
    margin-left: -102px;
    width: 127%;
  }

  @media (${devices.laptopL}) {
    margin-left: -181px;
    width: 148%;
  }

  @media (${devices.desktop}) {
    margin-left: -733px;
    width: 295%;
  }
`;

export const Input1 = styled.input`
  border: 1px solid #ccc;
  width: 60%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s; /* Add smooth transitions for a polished effect */

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #07f;
    box-shadow: 0 0 10px rgb(0 0 255 / 50%); /* Slightly increase the box shadow on focus */
  }

  &:hover {
    background-color: #f5f5f5; /* Lighten the background color on hover */
  }

  @media (${devices.tablet}) {
    width: 60%;
  }
`;

export const Span = styled.span`
  color: #ad0d0d;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  @media (${devices.mobileES}) {
    font-size: 0.8rem;
  }

  @media (${devices.mobileS}) {
    font-size: 0.8rem;
  }

  @media (${devices.mobileM}) {
    font-size: 1.2rem;
  }

  @media (${devices.mobileL}) {
    font-size: 1.3rem;
  }

  @media (${devices.tablet}) {
    font-size: 1.8rem;
    margin-left: 30px;
  }

  @media (${devices.laptop}) {
    font-size: 1.5rem;
  }

  @media (${devices.laptopL}) {
    font-size: 1.8rem;
    margin-left: 156px;
  }

  @media (${devices.desktop}) {
    font-size: 3rem;
  }
`;

export const Span1 = styled.span`
  color: #ad0d0d;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  @media (${devices.mobileES}) {
    font-size: 0.8rem;
  }

  @media (${devices.mobileS}) {
    font-size: 0.8rem;
  }

  @media (${devices.mobileM}) {
    font-size: 0.8rem;
  }

  @media (${devices.mobileL}) {
    font-size: 0.8rem;
  }

  @media (${devices.tablet}) {
    font-size: 0.8rem;
    margin-left: 30px;
  }

  @media (${devices.laptop}) {
    font-size: 1rem;
  }

  @media (${devices.laptopL}) {
    font-size: 1.1rem;
    margin-left: 156px;
  }

  @media (${devices.desktop}) {
    font-size: 1.5rem;
  }
`;

export const Span2 = styled.span`
  color: #ad0d0d;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  @media (${devices.mobileES}) {
    font-size: 0.8rem;
    margin-left: -19px;
  }

  @media (${devices.mobileS}) {
    font-size: 0.8rem;
  }

  @media (${devices.mobileM}) {
    font-size: 1.2rem;
  }

  @media (${devices.mobileL}) {
    font-size: 1.3rem;
  }

  @media (${devices.tablet}) {
    font-size: 1.8rem;
    margin-left: 8px;
  }

  @media (${devices.laptop}) {
    font-size: 1.5rem;
    margin-left: -97px;
  }

  @media (${devices.laptopL}) {
    font-size: 1.8rem;
    margin-left: -189px;
  }

  @media (${devices.desktop}) {
    font-size: 3rem;
    margin-left: -736px;
  }
`;
