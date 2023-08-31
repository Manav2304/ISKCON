import { Carousel } from "react-bootstrap";
import styled from "styled-components";
// import { devices } from "../../../style";

export const TextWrapper = styled.div`
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;
  padding-top: 40px;

  @media only screen and (max-width: 768px) {
    /* Styles for tablet view */
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }

  @media only screen and (max-width: 480px) {
    /* Styles for mobile view */
    padding-left: 0.1px;
    padding-bottom: 0.1px;
    padding-right: 0.1px;
  }

  @media only screen and (min-width: 1200px) {
    /* Styles for desktop view */
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
  margin: 40px 50px 50px;
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 768px) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    margin: 25px;
    font-size: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.2rem;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const PageImageCarousel = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain cover;

  @media only screen and (max-width: 767px) {
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    height: 100%;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (min-width: 1200px) {
    height: 100%;
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const PageStyleCarousel = styled(Carousel)`
  z-index: 0;

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 40px;
    width: 40px;
  }

  .carousel-indicators {
    height: 10px;
  }

  @media (max-width: 768px) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 10px;
      width: 10px;
    }

    .carousel-indicators {
      height: 5px;
      width: 5px;
    }
  }

  @media (min-width: 1200px) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 30px;
      width: 30px;
      margin: 80px;
    }

    .carousel-indicators {
      height: 5px;
    }
  }
`;

export const PageReviews = styled.div`
  @media only screen and (max-width: 767px) {
    margin-top: 5px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 7px;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 9px;
  }
`;
