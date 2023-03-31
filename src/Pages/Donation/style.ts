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
  font-size: 3rem;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  margin-top: 2rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 600px;
  height: 90px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
  @media screen and (min-width: 769px) {
    width: 60%;
    max-width: 50%;
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

export const TableStyle = styled.div`
  margin: 0px 50px 10px;
`;

