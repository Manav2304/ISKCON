import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const ServiceWrapper = styled.div`
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 50px;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
`;

export const LecturesWrapper = styled.div`
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

  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-left: 90px;
    margin-right: 90px;
    grid-template-rows: repeat(2);
  }

  @media only screen and (min-width: 1440px) and (max-width: 1919px) {
    margin-left: 100px;
    margin-right: 100px;
    grid-template-rows: repeat(2, 150px);
  }

  @media only screen and (min-width: 1920px) {
    margin-left: 150px;
    margin-right: 150px;
    grid-template-rows: repeat(2, 200px);
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
  width: 320px;
  height: 240px;

  @media only screen and (max-width: 767px) {
    width: 320px;
    height: 240px;
    margin: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 480px;
    height: 360px;
    margin: 10px;
  }

  @media only screen and (min-width: 1024px) {
    width: 640px;
    height: 480px;
    margin: 5px;
  }
`;

export const ImageCarousel = styled.img`
  width: 320px;
  height: 240px;
  object-fit: contain cover;

  @media only screen and (min-width: 767px) {
    width: 320px;
    height: 240px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 480px;
    height: 360px;
  }

  @media only screen and (min-width: 1024px) {
    width: 640px;
    height: 480px;
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
    grid-template-columns: repeat(1, minmax(0, 1fr));
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

export const LinkStyle = styled.a`
  text-decoration: none;
`;
