import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: Transparent ;
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
  background: Transparent ;
`;

export const DonationHeader = styled.th`
font-weight: bold;
font-size: 2rem;
  text-align: left;
  padding: 10px;
  border-bottom: 0.3rem solid #A0522D;
  `;

export const TableHeader = styled.th`
  font-weight: bold;
  text-align: left;
  padding: 10px;
  border-bottom: 0.3rem solid #A0522D;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: Transparent;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  color: #A52A2A;
  border-bottom: 0.19rem solid #8B0000;
  background: Transparent;
`;

export const Button = styled.button`
  background-color: #800000;
  color: #F5DEB3;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

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

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 20px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #0077ff;
  }
`;


export const NameInput = styled.form`
color: #A52A2A;
`;

export const PhoneInput = styled.form`
color: #A52A2A;
`;

export const EmailInput = styled.form`
color: #A52A2A;
`;