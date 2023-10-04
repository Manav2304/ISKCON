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
    gap: 10px;
  }

  @media (${devices.laptopL}) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 100px;
  }
`;

// export const FestivalImage = styled.img`
//   width: 100%;
//   height: 100px;
//   border: 3px solid #963;

//   @media (${devices.mobileES}) {
//     width: 317px;
//     height: 250px;
//   }

//   @media (${devices.mobileS}) {
//     width: 375px;
//     height: 250px;
//   }

//   @media (${devices.mobileM}) {
//     width: 425px;
//     height: 250px;
//   }

//   @media (${devices.mobileL}) {
//     width: 425px;
//     height: 250px;
//   }

//   @media (${devices.tablet}) {
//     width: 350px;
//     height: 250px;
//   }

//   @media (${devices.laptop}) {
//     width: 300px;
//     height: 300px;
//   }

//   @media (${devices.laptopL}) {
//     width: 100%;
//     height: 350px;
//   }

//   @media (${devices.desktop}) {
//     width: 100%;
//     height: 350px;
//   }
// `;

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

export const HeadingStyle = styled.h1`
  color: #7e5959;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;

  @media (${devices.mobileES}) {
    margin-top: -28px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileS}) {
    margin-top: -30px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileM}) {
    margin-top: -20px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileL}) {
    margin-top: 40px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 20px !important;
    letter-spacing: 2px !important;
    margin-bottom: 5px;
  }

  @media (${devices.tablet}) {
    margin-top: 30px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 40px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.laptop}) {
    margin-top: 135px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.laptopL}) {
    margin-top: 135px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.desktop}) {
    margin-top: 100px;
    font-weight: 700 !important;
    font-size: 4em !important;
    letter-spacing: 4.5px !important;
    line-height: 40px !important;
    margin-bottom: 10px;
  }
`;

export const FestivalImage = styled.img`
  width: 100%;
  height: 100px;
  border: 3px solid #963;
  display: block; /* Ensure the image is a block-level element */
  margin: 0 auto; /* Center the image horizontally */
  margin-bottom: 20px; /* Add some gap between images */

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
