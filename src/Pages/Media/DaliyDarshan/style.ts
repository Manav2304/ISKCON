// // import { hover } from "@testing-library/user-event/dist/hover";
// import { Card } from "react-bootstrap";
// import styled from "styled-components";

// export const mediatwo = styled.div`
//   // box-sizing: border-box;
//   // padding: 0;
//   // margin: 0;
// `;

// export const Section = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
// `;
// export const SringarDarshan = styled.div`
//   // display: flex;
//   // justify-content: center;
//   // flex-wrap: wrap;
// `;
// export const SringarDarshancard = styled(Card)`
//   // background: white;
//   // width: 270px;
//   // height: 400px;
//   // margin: 10px;
//   // border-radius: 15px;
// `;
// export const SringarDarshanImgs = styled.div`
//   // height: 150px;
//   // margin-bottom: 15px;
//   // border-radius: 15px;
//   // flex-wrap: wrap;
// `;

// export const Viewall = styled.div`
//   // content: center;
// `;

// export const TitleName1 = styled.h2``;

// export const Feedback = styled.img`
//   display: flex;
// `;

import styled from "styled-components";
import { devices } from "../../../style";

export const DarshanContainer = styled.div`
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
    gap: 10px;
  }

  @media (${devices.laptopL}) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 100px;
  }
`;

export const DarshanImage = styled.img`
  width: 50px;
  height: 50px;
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
    width: 30px;
    height: 30px;
  }

  @media (${devices.laptopL}) {
    width: 200px;
    height: 150px;
  }

  @media (${devices.desktop}) {
    width: 100%;
    height: 350px;
  }
`;

export const DarshanInfo = styled.div`
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
export const Darshanview = styled.div``;
