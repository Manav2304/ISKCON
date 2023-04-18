import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const ServiceWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-top: 80px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 80px;
    padding-bottom: 50px;
  }
`;

export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 2rem;
    padding: 40px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
    padding: 50px;
  }
`;
export const ImageTitle = styled.img`
  width: 100%;
  max-width: 400px;

  @media only screen and (max-width: 768px) {
    width: 70%;
    max-width: 300px;
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

export const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;

export const TitleName = styled.h2`
  color: #7e5959;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
`;

export const YouTubeWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2);
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 25px;
  overflow-x: hidden;

  @media (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
    max-width: 500px;
    width: 100%;
    height: 210px;
    grid-template-rows: repeat(2);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 20px;
    margin-right: 20px;
    grid-template-rows: repeat(2);
  }

  @media (min-width: 1024px) {
    margin-left: 100px;
    margin-right: 100px;
    grid-template-rows: repeat(2);
  }
`;

export const LinkName = styled.h1`
  color: #7e5959;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Reviews = styled.div`
  height: 300px;
  width: 500px;

  @media only screen and (max-width: 767px) {
    margin: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 10px;
  }

  @media only screen and (min-width: 1024px) {
    margin: 5px;
  }
`;

export const ImageCarousel = styled.img`
  width: 500px;
  height: 300px;
  object-fit: contain cover;

  @media only screen and (min-width: 767px) {
    width: 80%;
    height: 200px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 250px;
  }

  @media only screen and (min-width: 1024px) {
    width: 500px;
    height: 300px;
  }
`;

/*Used class name for handle the size of icon*/
export const StyleCarousel = styled(Carousel)`
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 40px;
    width: 40px;
  }

  .carousel-indicators {
    height: 10px;
  }

  @media (max-width: 767px) {
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

  @media (min-width: 768px) and (max-width: 1023px) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 20px;
      width: 20px;
      margin: 5px;
    }

    .carousel-indicators {
      height: 7.5px;
      width: 7.5px;
    }
  }

  @media (min-width: 1024px) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 30px;
      width: 30px;
      margin: 10px;
    }

    .carousel-indicators {
      height: 15px;
    }
  }
`;

export const CarouselWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 20px;
    margin: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
    margin: 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
    margin: 20px;
  }
`;
export const SpotifyWrapper = styled.iframe.attrs({
  width: 800,
  height: 500,
})`
  @media (max-width: 768px) {
    width: 80%;
    height: 400px;
  }

  @media (min-width: 1024px) {
    width: 800px;
    height: 500px;
  }

  @media (max-width: 480px) {
    width: 80%;
    height: 400px;
  }
`;
