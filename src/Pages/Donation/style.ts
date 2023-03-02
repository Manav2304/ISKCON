import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Option = styled.option``;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  background-color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
