import styled from "styled-components";
import { devices } from "../../../style";

export const DonationTableWrapper = styled.div`
  margin-top: 280px;

  @media (${devices.mobileES}) {
    margin-top: 20px;
  }

  @media (${devices.mobileS}) {
    margin-top: 20px;
  }

  @media (${devices.mobileM}) {
    margin-top: 40px;
  }

  @media (${devices.mobileL}) {
    margin-top: 40px;
  }

  @media (${devices.tablet}) {
    margin-top: 40px;
  }

  @media (${devices.laptop}) {
    margin-top: 50px;
  }

  @media (${devices.laptopL}) {
    margin-top: 30px;
  }

  @media (${devices.desktop}) {
    margin-top: 50px;
  }
`;

export const DonationTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const DonationTableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const DonationTableHeadRow = styled.tr``;

export const DonationTableHeadCell = styled.th`
  padding: 10px;
  text-align: left;
`;

export const DonationTableBody = styled.tbody``;

export const DonationTableRow = styled.tr``;

export const DonationTableCell = styled.td`
  padding: 10px;
`;

export const DonationCheckbox = styled.input``;

export const Wrapper = styled.div`
  margin-top: -400px;
`;
