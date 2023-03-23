import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableData = styled.td`
  text-align: left;
  padding: 10px;
`;

export const Paragraph = styled.div`
  font-size: 1rem;
  text-align: justify;
  font-family: "Times New Roman", Times, serif;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const TableWrapper = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  font-weight: bold;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
`;

export const CopyButton = styled.button<{ copied: boolean }>`
  margin-left: 1rem;
  padding: 0.5rem;
  background-color: ${({ copied }) => (copied ? "green" : "#4caf50")};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ copied }) => (copied ? "green" : "#2e8b57")};
  }

  &:active {
    background-color: ${({ copied }) => (copied ? "green" : "#4caf50")};
  }
`;
