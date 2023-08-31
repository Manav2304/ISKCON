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
