import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const sizes = {
  mobileES: "100px",
  mobileS: "375px",
  mobileM: "425px",
  mobileL: "576px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileES: `min-width: ${sizes.mobileES}`,
  mobileS: `min-width: ${sizes.mobileS}`,
  mobileM: `min-width: ${sizes.mobileM}`,
  mobileL: `min-width: ${sizes.mobileL}`,
  tablet: `min-width: ${sizes.tablet}`,
  laptop: `min-width: ${sizes.laptop}`,
  laptopL: `min-width: ${sizes.laptopL}`,
  desktop: `min-width: ${sizes.desktop}`,
};

export const PageImageCarousel = styled.img`
  width: 100%;

  @media (${devices.mobileES}) {
    height: 130px;
    width: 100%;
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
    padding-left: 35px;
    padding-right: 35px;
  }

  @media (${devices.tablet}) {
    height: 320px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (${devices.laptop}) {
    height: 480px;
    padding-left: 115px;
    padding-right: 115px;
  }

  @media (${devices.laptopL}) {
    height: 580px;
  }

  @media (${devices.desktop}) {
    height: 1080px;
  }
`;

export const PageStyleCarousel = styled(Carousel)`
  z-index: 0;

  @media (${devices.mobileES}) {
    .carousel-control-prev-icon {
      margin-left: 20px;
      height: 20px;
      width: 20px;
    }

    .carousel-control-next-icon {
      height: 20px;
      width: 20px;
      margin-right: 20px;
    }

    .carousel-indicators {
      opacity: 0;
    }
  }

  @media (${devices.mobileS}) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 20px;
      width: 20px;
    }

    .carousel-indicators {
      opacity: 0;
    }
  }

  @media (${devices.mobileM}) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 20px;
      width: 20px;
    }

    .carousel-indicators {
      opacity: 0;
    }
  }

  @media (${devices.mobileL}) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 20px;
      width: 20px;
    }

    .carousel-indicators {
      opacity: 0;
    }
  }

  @media (${devices.tablet}) {
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

  @media (${devices.laptop}) {
    .carousel-control-prev-icon {
      height: 40px;
      width: 40px;
      opacity: 0.9;
      margin-left: 90px;
    }

    .carousel-control-next-icon {
      height: 40px;
      width: 40px;
      opacity: 0.9;
      margin-right: 90px;
    }

    .carousel-indicators {
      opacity: 0.9;
    }
  }

  @media (${devices.laptopL}) {
    .carousel-control-prev-icon {
      margin-left: 100px;
      height: 40px;
      width: 40px;
      opacity: 0.9;
      padding: 10px;
    }

    .carousel-control-next-icon {
      height: 40px;
      width: 40px;
      opacity: 0.9;
      padding: 10px;
      margin-right: 100px;
    }

    .carousel-indicators {
      opacity: 0.9;
    }
  }

  @media (${devices.desktop}) {
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

export const PageReviews = styled.div`
  @media only (max-width: 767px) {
    margin-top: 5px;
  }

  @media only (min-width: 768px) and (max-width: 1199px) {
    margin-top: 7px;
  }

  @media only (min-width: 1200px) {
    margin-top: 9px;
  }
`;

export const TextStyle = styled.div`
  text-align: justify;
  color: #ad0d0d;
  line-height: 1.5;
  font-family: "Times New Roman", Times, serif;

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

export const HeadingStyle = styled.h1`
  color: #7e5959;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 4vw;
  margin-bottom: 0;

  @media (${devices.mobileES}) {
    margin-top: 20px;
  }

  @media (${devices.mobileS}) {
    margin-top: 2px;
  }

  @media (${devices.mobileM}) {
    margin-top: 20px;
  }

  @media (${devices.mobileL}) {
    margin-top: 40px;
  }

  @media (${devices.tablet}) {
    margin-top: 30px;
  }

  @media (${devices.laptop}) {
    margin-top: 40px;
  }

  @media (${devices.laptopL}) {
    margin-top: 40px;
  }

  @media (${devices.desktop}) {
    margin-top: 100px;
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
    width: 30%;
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
  object-fit: contain;
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
    height: 480px;
    padding-left: 120px;
    padding-right: 120px;
  }

  @media (${devices.laptopL}) {
    height: 580px;
    padding-left: 105px;
    padding-right: 105px;
  }

  @media (${devices.desktop}) {
    height: 1080px;
    padding-left: 125px;
    padding-right: 125px;
  }
`;

export const MainWrapper = styled.div`
  @media (${devices.mobileES}) {
    margin-top: 48px;
  }

  @media (${devices.mobileS}) {
    margin-top: 48px;
  }

  @media (${devices.mobileM}) {
    margin-top: 45px;
  }

  @media (${devices.mobileL}) {
    margin-top: 48px;
  }

  @media (${devices.tablet}) {
    margin-top: 70px;
  }

  @media (${devices.laptop}) {
    margin-top: 70px;
  }

  @media (${devices.laptopL}) {
    margin-top: 70px;
  }

  @media (${devices.desktop}) {
    margin-top: 70px;
  }
`;
