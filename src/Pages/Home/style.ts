import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const sizes = {
  mobileS: "375px",
  mobileM: "425px",
  mobileL: "576px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

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
    padding-left: 120px;
    padding-right: 120px;
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

export const TextStyle = styled.div`
  text-align: justify;
  color: #ad0d0d;
  line-height: 1.5;
  font-family: "Times New Roman", Times, serif;

  @media screen and (${devices.mobileS}) {
    font-size: 0.8rem;
    margin: 30px 20px;
  }

  @media screen and (${devices.mobileM}) {
    margin: 30px;
    font-size: 1.2rem;
  }

  @media screen and (${devices.mobileL}) {
    margin: 30px 25px;
    font-size: 1.3rem;
  }

  @media screen and (${devices.tablet}) {
    margin: 30px 40px;
    font-size: 1.8rem;
  }

  @media screen and (${devices.laptop}) {
    margin: 30px 120px;
    font-size: 1.5rem;
  }

  @media screen and (${devices.laptopL}) {
    margin: 50px 80px;
    font-size: 1.8rem;
  }

  @media screen and (${devices.desktop}) {
    margin: 50px 120px;
    font-size: 3rem;
  }
`;

export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 30px;
`;
export const ImageTitle = styled.img`
  margin-bottom: 30px;
  width: 100px;

  @media screen and (${devices.mobileS}) {
    width: 10%;
  }

  @media screen and (${devices.mobileM}) {
    width: 10%;
  }

  @media screen and (${devices.mobileL}) {
    width: 60%;
  }

  @media screen and (${devices.tablet}) {
    width: 40%;
  }

  @media screen and (${devices.laptop}) {
    width: 30%;
  }

  @media screen and (${devices.laptopL}) {
    width: 35%;
  }

  @media screen and (${devices.desktop}) {
    width: 20%;
  }
`;

export const Reviews = styled.div`
  width: 100%;

  @media screen and (${devices.mobileS}) {
    height: 130px;
    margin-top: 75px;
  }

  @media screen and (${devices.mobileM}) {
    height: 150px;
    margin-top: 75px;
  }

  @media screen and (${devices.mobileL}) {
    height: 180px;
    margin-top: 75px;
  }

  @media screen and (${devices.tablet}) {
    margin-top: 65px;
    height: 320px;
  }

  @media screen and (${devices.laptop}) {
    margin-top: 105px;
    height: 480px;
  }

  @media screen and (${devices.laptopL}) {
    margin-top: 75px;
    height: 580px;
  }

  @media screen and (${devices.desktop}) {
    height: 1080px;
  }
`;

export const GlobleCarouselStyle = styled.div`
  @media $(devices.mobileS) {
    margin-bottom: 50px;
  }
`;

export const ImageCarousel = styled.img`
  width: 100%;

  @media screen and (${devices.mobileS}) {
    height: 130px;
  }

  @media screen and (${devices.mobileM}) {
    height: 150px;
  }

  @media screen and (${devices.mobileL}) {
    height: 180px;
  }

  @media screen and (${devices.tablet}) {
    height: 320px;
  }

  @media screen and (${devices.laptop}) {
    height: 480px;
  }

  @media screen and (${devices.laptopL}) {
    height: 580px;
  }

  @media screen and (${devices.desktop}) {
    height: 1080px;
  }
`;
export const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Image = styled.img`
  object-fit: contain;
  width: 100%;

  @media screen and (${devices.mobileS}) {
    height: 130px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (${devices.mobileM}) {
    height: 150px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (${devices.mobileL}) {
    height: 180px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (${devices.tablet}) {
    height: 320px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (${devices.laptop}) {
    height: 480px;
    padding: 40px;
  }

  @media screen and (${devices.laptopL}) {
    height: 580px;
    padding-left: 85px;
    padding-right: 85px;
  }

  @media screen and (${devices.desktop}) {
    height: 1080px;
    padding-left: 125px;
    padding-right: 125px;
  }
`;

/*Used class name for handle the size of icon*/
export const StyleCarousel = styled(Carousel)`
  z-index: 0;

  @media screen and (${devices.mobileS}) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 20px;
      width: 20px;
    }

    .carousel-indicators {
      opacity: 0;
    }
  }

  @media screen and (${devices.mobileM}) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 20px;
      width: 20px;
    }

    .carousel-indicators {
      opacity: 0;
    }
  }

  @media screen and (${devices.mobileL}) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 20px;
      width: 20px;
    }

    .carousel-indicators {
      opacity: 0;
    }
  }

  @media screen and (${devices.tablet}) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 40px;
      width: 40px;
      opacity: 0.9;
    }

    .carousel-indicators {
      opacity: 0.9;
    }
  }

  @media screen and (${devices.laptop}) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 40px;
      width: 40px;
      opacity: 0.9;
    }

    .carousel-indicators {
      opacity: 0.9;
    }
  }

  @media screen and (${devices.laptopL}) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 40px;
      width: 40px;
      opacity: 0.9;
    }

    .carousel-indicators {
      opacity: 0.9;
    }
  }

  @media screen and (${devices.desktop}) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 60px;
      width: 60px;
      opacity: 0.9;
    }

    .carousel-indicators {
      opacity: 0.9;
    }
  }
`;
