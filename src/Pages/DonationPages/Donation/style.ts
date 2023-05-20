import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border: 2px solid #7e5959;
  width: 100%;
`;

export const TableColumn = styled.td`
  text-align: left;
  padding: 10px;
`;

export const Paragraph = styled.div`
  font-size: 1.2rem;
  text-align: justify center;
  font-family: "Times New Roman", Times, serif;
  position: relative;
  padding: 10px;
  color: #ad0d0d;

  &::before,
  &::after {
    content: '"';
    font-size: 3rem;
    color: #f4c2c2;
    position: absolute;
    top: -0.5rem;
  }

  &::before {
    left: -10px;
  }

  &::after {
    right: -10px;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  font-weight: bold;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f4c2c2;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #7e5959;
  padding: 0.5rem;
  text-align: left;
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

export const TableStyle = styled.div`
  margin: 1px 50px 10px;

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
