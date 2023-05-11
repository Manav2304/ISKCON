import styled from "styled-components";
import { devices } from "../../style";

export const FestivalContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, minmax(0, 1fr));

   @media (${devices.mobileES}) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
   }

   @media (${devices.mobileS}) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
   }

   @media (${devices.mobileM}) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
     }

  @media (${devices.mobileL}) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
   }

   @media (${devices.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    }

   @media (${devices.laptop}) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap:10px;
   }

  @media (${devices.laptopL}) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 100px;  
   }
`;

export const FestivalImage = styled.img`
  width: 100%;
  height: 100px;
  border: 3px solid #963;

  @media (${devices.mobileES}) {
    width: 317px;
    height: 250px;
  }

  @media (${devices.mobileS}) {
    width: 375px;
    height: 250px;
  }

  @media (${devices.mobileM}) {
    width: 425px;
    height: 250px;
  }

  @media (${devices.mobileL}) {
    width: 425px;
    height: 250px;
  }

  @media (${devices.tablet}) {
    width: 350px;
    height: 250px;
  }

  @media (${devices.laptop}) {
    width: 300px;
    height: 300px;
  }

  @media (${devices.laptopL}) {
    width: 100%;
    height: 350px;
  }

  @media (${devices.desktop}) {
    width: 100%;
    height: 350px;
  }
`;

export const FestivalInfo = styled.div`
  background-color: transparent;
  padding: 10px;
  text-align: center;
`;

export const Heading2 = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #7e5959;
`;

export const Paragraph1 = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #7e5959;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #7e5959;
  margin: 10px;
`;

export const Button = styled.button`
  background-color: #7e5959;
  color: #fff;
  font-size: 14px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;
