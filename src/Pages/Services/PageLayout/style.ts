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
  margin: 40px 50px 50px;
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;

  @media (${devices.mobileES}) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media (${devices.mobileS}) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media (${devices.mobileM}) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media (${devices.mobileL}) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media (${devices.tablet}) {
    margin: 25px;
    font-size: 1rem;
  }

  @media (${devices.laptop}) {
    margin: 25px;
    font-size: 1rem;
  }

  @media (${devices.laptopL}) {
    font-size: 1.2rem;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (${devices.desktop}) {
    font-size: 1.2rem;
    padding-left: 30px;
    padding-right: 30px;
  }

  /* @media only screen and (max-width: 768px) {
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
  } */
`;

export const PageImageCarousel = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain cover;

  
  @media (${devices.mobileES}) {
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.mobileS}) {
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.mobileM}) {
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.mobileL}) {
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${devices.tablet}) {
    height: 100%;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (${devices.laptop}) {
    height: 100%;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (${devices.laptopL}) {
    height: 100%;
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (${devices.desktop}) {
    height: 100%;
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;
  }

  /* @media only screen and (max-width: 767px) {
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
  } */
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

  @media (${devices.mobileES}) {
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

  @media (${devices.mobileS}) {
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

  @media (${devices.mobileM}) {
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

  @media (${devices.mobileL}) {
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

  @media (${devices.tablet}) {
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

  @media (${devices.laptop}) {
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

  @media (${devices.laptopL}) {
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

  @media (${devices.desktop}) {
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
  
/* 
 
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
  } */
`;

export const PageReviews = styled.div`

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

  /* @media only screen and (max-width: 767px) {
    margin-top: 5px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 7px;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 9px;
  } */
`;
