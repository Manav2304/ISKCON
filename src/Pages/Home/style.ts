import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const TextStyle = styled.div`
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
export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
    padding: 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 1rem;
    padding: 40px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
    padding: 60px;
  }

  @media only screen and (min-width: 1400px) and (max-width: 2500px) {
    font-size: 1rem;
    padding: 60px;
    margin-top: 100px;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 1rem;
    padding: 60px;
    margin-top: 200px;
  }
`;

export const ImageTitle = styled.img`
  width: 100%;
  max-width: 400px;

  @media only screen and (max-width: 768px) {
    width: 70%;
    max-width: 200px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    width: 70%;
    max-width: 300px;
  }

  @media only screen and (min-width: 1200px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const Reviews = styled.div`
  @media only screen and (max-width: 479px) {
    margin-top: 50px;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    margin-top: 50px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    margin-top: 50px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    margin-top: 50px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    margin-top: 72px;
  }

  @media only screen and (min-width: 1400px) and (max-width: 2500px) {
    margin-top: 85px;
    height: 600px;
  }

  @media only screen and (min-width: 2560px) {
    margin-top: 85px;
    height: 800px;
    width: 100%;
  }
`;

export const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ImageCarousel = styled.img`
  width: 100%;

  @media only screen and (max-width: 479px) {
    height: 230px;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    height: 250px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 300px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    height: 400px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    height: 480px;
  }

  @media only screen and (min-width: 1400px) and (max-width: 2500px) {
    height: 650px;
  }

  @media only screen and (min-width: 2560px) {
    height: 950px;
  }
`;

export const Image = styled.img`
  object-fit: contain;

  @media only screen and (max-width: 767px) {
    height: 89%;
    width: 92%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    height: 89%;
    width: 89%;
  }

  @media only screen and (min-width: 1200px) {
    height: 87%;
    width: 87%;
  }

  @media (min-width: 1400px) {
    height: 90%;
    width: 90%;
  }
`;
/*Used class name for handle the size of icon*/
export const StyleCarousel = styled(Carousel)`
  z-index: 0;

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 40px;
    width: 40px;
  }

  .carousel-indicators {
    height: 10px;
  }

  .carousel-caption h5 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
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
