import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { devices } from "../../../style";

export const TextWrapper = styled.div`
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;

  @media (${devices.mobileES}) {
    padding-left: 0.1px;
    padding-bottom: 0.1px;
    padding-right: 0.1px;
  }

  @media (${devices.mobileS}) {
    padding-left: 0.1px;
    padding-bottom: 0.1px;
    padding-right: 0.1px;
  }

  @media (${devices.mobileM}) {
    padding-left: 0.1px;
    padding-bottom: 0.1px;
    padding-right: 0.1px;
  }

  @media (${devices.mobileL}) {
    padding-left: 0.1px;
    padding-bottom: 0.1px;
    padding-right: 0.1px;
  }

  @media (${devices.tablet}) {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }

  @media (${devices.laptop}) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
  }

  @media (${devices.laptopL}) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
  }

  @media (${devices.desktop}) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
  color: #ad0d0d;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  @media (${devices.mobileES}) {
    font-size: 0.8rem;
    margin: 30px 20px;
  }

  @media (${devices.mobileS}) {
    font-size: 0.8rem;
    margin: 30px 20px;
  }

  @media (${devices.mobileM}) {
    margin: 30px;
    font-size: 1.2rem;
  }

  @media (${devices.mobileL}) {
    margin: 30px 25px;
    font-size: 1.3rem;
  }

  @media (${devices.tablet}) {
    margin: 30px 40px;
    font-size: 1.8rem;
  }

  @media (${devices.laptop}) {
    margin: 30px 120px;
    font-size: 1.5rem;
  }

  @media (${devices.laptopL}) {
    margin: 50px 105px;
    font-size: 1.8rem;
  }

  @media (${devices.desktop}) {
    margin: 50px 120px;
    font-size: 3rem;
  }
`;

export const ContactLink = styled.a`
  color: #ad0d0d;
  text-decoration: none;

  &:hover {
    color: #800000;
  }
`;

export const PageCarouselWrapper = styled(Carousel)`
  .carousel-status {
    opacity: 0;
  }

  .control-dots {
    opacity: 0;
  }

  @media (${devices.mobileES}) {
    margin-top: 5px;
  }

  @media (${devices.mobileS}) {
    margin-top: 5px;
  }

  @media (${devices.mobileM}) {
    margin-top: 5px;
  }

  @media (${devices.mobileL}) {
    margin-top: 5px;
  }

  @media (${devices.tablet}) {
    margin-top: 7px;
  }

  @media (${devices.laptop}) {
    margin-top: 7px;
  }

  @media (${devices.laptopL}) {
    margin-top: 9px;
  }

  @media (${devices.desktop}) {
    margin-top: 9px;
  }
`;

export const StyledPageCarouselWrapper = styled(PageCarouselWrapper)`
  @media (${devices.mobileES}) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.mobileS}) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.mobileM}) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (${devices.mobileL}) {
    padding-left: 35px;
    padding-right: 35px;
  }

  @media (${devices.tablet}) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (${devices.laptop}) {
    padding-left: 115px;
    padding-right: 115px;
  }

  @media (${devices.laptopL}) {
    padding-left: 115px;
    padding-right: 115px;
  }

  @media (${devices.desktop}) {
    padding-left: 115px;
    padding-right: 115px;
  }
`;
