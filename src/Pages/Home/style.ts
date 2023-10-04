import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { devices } from "../../style";

export const TextStyle = styled.div`
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

export const HeadingStyle = styled.p`
  color: #7e5959;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;

  @media (${devices.mobileES}) {
    margin-top: 20px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileS}) {
    margin-top: 20px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileM}) {
    margin-top: 20px;
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
    line-height: 30px !important;
    letter-spacing: 2px !important;
    margin-bottom: 5px;
  }

  @media (${devices.tablet}) {
    margin-top: 30px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.laptop}) {
    margin-top: 40px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.laptopL}) {
    margin-top: 40px;
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

export const ImageTitle = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;

  @media (${devices.mobileES}) {
    width: 60%;
    margin-bottom: 15px;
  }

  @media (${devices.mobileS}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.mobileM}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.mobileL}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.tablet}) {
    width: 40%;
    margin-bottom: 30px;
  }

  @media (${devices.laptop}) {
    width: 40%;
    margin-bottom: 30px;
  }

  @media (${devices.laptopL}) {
    margin-bottom: 30px;
    width: 35%;
  }

  @media (${devices.desktop}) {
    width: 20%;
    margin-bottom: 30px;
  }
`;

export const Image = styled.img`
  object-fit: contain cover;
  width: 100%;

  @media (${devices.mobileES}) {
    height: 130px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.mobileS}) {
    height: 130px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.mobileM}) {
    height: 150px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (${devices.mobileL}) {
    height: 180px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (${devices.tablet}) {
    height: 320px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (${devices.laptop}) {
    height: 420px;
    padding-left: 120px;
    padding-right: 120px;
  }

  @media (${devices.laptopL}) {
    height: 480px;
    padding-left: 105px;
    padding-right: 105px;
  }

  @media (${devices.desktop}) {
    height: 1080px;
    padding-left: 125px;
    padding-right: 125px;
  }
`;

export const CarouselWrapper = styled(Carousel)`
  .carousel-status {
    opacity: 0;
  }

  .control-dots {
    opacity: 0;
  }

  @media (${devices.mobileES}) {
    margin-top: 47px;
  }

  @media (${devices.mobileS}) {
    margin-top: 47px;
  }

  @media (${devices.mobileM}) {
    margin-top: 58px;
  }

  @media (${devices.mobileL}) {
    margin-top: 47px;
  }

  @media (min-width: 500px) {
    margin-top: 47px;
  }

  @media (${devices.tablet}) {
    margin-top: 47px;
  }

  @media (${devices.laptop}) {
    margin-top: 124px;
  }

  @media (${devices.laptopL}) {
    margin-top: 124px;
  }

  @media (${devices.desktop}) {
    margin-top: 140px;
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
