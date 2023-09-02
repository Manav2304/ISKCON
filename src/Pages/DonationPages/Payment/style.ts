import styled from "styled-components";
import { devices } from "../../../style";

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
