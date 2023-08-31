import styled from "styled-components";
import { devices } from "../../../style";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: transparent;
  margin-top: 115px;

  @media (${devices.mobileES}) {
    max-width: 325px;
    margin: 0 auto;
    padding: 20px;
    background: transparent;
    margin-top: 115px;
  }

  @media (${devices.mobileS}) {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: transparent;
    margin-top: 115px;
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
    margin: 300px 120px;
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
`;

export const DonationHeader = styled.th`
  font-weight: bold;
  font-size: 2rem;
  text-align: left;
  padding: 10px;
  border-bottom: 0.3rem solid #a0522d;
`;

export const TableHeader = styled.th`
  font-weight: bold;
  text-align: left;
  padding: 10px;
  border-bottom: 0.3rem solid #a0522d;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: transparent;
  }
`;

export const TableCell = styled.td`
  color: #a52a2a;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-top: 1px solid #ddd;
`;

export const Form = styled.form`
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 20px;
  font-size: 16px;

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
  justify-content: end;
`;

export const Button = styled.button`
  background-color: #800000;
  color: #f5deb3;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  margin: 10px 5px;
  transition: background-color 0.3s ease;

  &:active {
    background-color: #fff;
    transform: scale(0.95);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
`;
