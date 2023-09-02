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
  display: flex;
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
  display: flex;
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
  margin: 10px 5px; /* Added margin to create a gap between buttons */
  transition: background-color 0.3s ease;

  &.active-button {
    background-color: #f00; /* Change to the desired background color for the clicked state */
  }

  &:active {
    transform: scale(0.95);
  }
`;
export const ButtonContainer = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;

  @media (${devices.mobileES}) {
    justify-content: left;
  }

  @media (${devices.mobileS}) {
    justify-content: left;
  }

  @media (${devices.mobileM}) {
    justify-content: left;
  }

  @media (${devices.mobileL}) {
    justify-content: left;
  }

  @media (${devices.tablet}) {
    justify-content: center;
  }

  @media (${devices.laptop}) {
    justify-content: center;
  }

  @media (${devices.laptopL}) {
    justify-content: center;
  }

  @media (${devices.desktop}) {
    justify-content: center;
  }
`;
