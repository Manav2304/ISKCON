import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: 'Times New Roman', Times, serif;
`;

export const Paragraph = styled.div`
font-size: 1rem;
text-align: justify;
font-family: 'Times New Roman', Times, serif;
`;

export const TableWrapper = styled.div`
  margin-top: 20px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
`;

export const TableData = styled.td`
  text-align: left;
  padding: 10px;
`;
export const InfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Detail = styled.span`
  font-size: 16px;
  margin-bottom: 5px;
`;

interface CopyButtonProps {
  copied: boolean;
}

export const CopyButton = styled.button<CopyButtonProps>`
  background-color: ${({ copied }) => (copied ? '#34a853' : '#ad0d0d')};
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: ${({ copied }) => (copied ? '#5cb85c' : '#0069d9')};
  }
  
  &:focus {
    outline: none;
  }
  
  &:active {
    background-color: ${({ copied }) => (copied ? '#5cb85c' : '#007bff')};
  }
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 3px 8px;
  }
`;
