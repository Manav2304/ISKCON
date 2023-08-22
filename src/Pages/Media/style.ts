import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { devices } from "../../style";

export const ServiceWrapper = styled.div`
  padding-bottom: 50px;

  @media (${devices.mobileES}) {
    padding-top: 80px;
    padding-bottom: 30px;
  }

  @media (${devices.mobileS}) {
    padding-top: 80px;
    padding-bottom: 30px;
  }

  @media (${devices.mobileM}) {
    padding-top: 80px;
    padding-bottom: 30px;
  }

  @media (${devices.mobileL}) {
    padding-top: 80px;
    padding-bottom: 30px;
  }

  @media (${devices.tablet}) {
    padding-top: 80px;
    padding-bottom: 30px;
  }

  @media (${devices.laptop}) {
    padding-top: 80px;
    padding-bottom: 30px;
  }

  @media (${devices.laptopL}) {
    padding-top: 80px;
    padding-bottom: 50px;
  }

  @media (${devices.desktop}) {
    padding-top: 80px;
    padding-bottom: 50px;
  }
`;

export const ImageTitle = styled.img`
  width: 100%;
  max-width: 400px;

  @media (${devices.mobileES}) {
    width: 70%;
    max-width: 300px;
  }

  @media (${devices.mobileS}) {
    width: 70%;
    max-width: 300px;
  }

  @media (${devices.mobileM}) {
    width: 70%;
    max-width: 300px;
  }

  @media (${devices.mobileL}) {
    width: 70%;
    max-width: 300px;
  }

  @media (${devices.tablet}) {
    width: 70%;
    max-width: 300px;
  }

  @media (${devices.laptop}) {
    width: 70%;
    max-width: 300px;
  }

  @media (${devices.laptopL}) {
    width: 100%;
    max-width: 400px;
  }

  @media (${devices.desktop}) {
    width: 100%;
    max-width: 400px;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
`;

export const LecturesWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const TitleName = styled.h2`
  color: #7e5959;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  margin-top: 15px;
  
`;

export const YouTubeWrapper = styled.div`
  display: flex;

  @media (${devices.mobileES}) {
    flex-direction: column;
  }

  @media (${devices.mobileS}) {
    flex-direction: column;
  }

  @media (${devices.mobileM}) {
    flex-direction: column;
    gap: 10px;
  }

  @media (${devices.mobileL}) {
    flex-direction: column;
    gap: 10px;
  }

  @media (${devices.tablet}) {
    flex-direction: row;
    gap: 10px;
  }

  @media (${devices.laptop}) {
    flex-direction: row;
    gap: 50px;
  }

  @media (${devices.laptopL}) {
    flex-direction: row;
    gap: 100px;
  }

  @media (${devices.desktop}) {
    flex-direction: row;
    gap: 100px;
  }
`;

export const LinkName = styled.h1`
  margin-top: 30px;
  margin-bottom: 30px;
  color: #7e5959;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  @media (${devices.mobileES}) {
    margin-top: 10px;
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
    font-size: 2em !important;
    line-height: 40px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.laptop}) {
    margin-top: 55px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.laptopL}) {
    margin-top: 15px;
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

export const Reviews = styled.div`
  width: 320px;
  height: 240px;
  margin-bottom: 10px;
  padding: 20px;

  @media (${devices.mobileES}) {
    height: 240px;
    width: 320px;
  }

  @media (${devices.mobileS}) {
    height: 240px;
    width: 320px;
  }

  @media (${devices.mobileM}) {
    height: 240px;
    width: 320px;
  }

  @media (${devices.mobileL}) {
    height: 240px;
    width: 320px;
  }

  @media (${devices.tablet}) {
    width: 480px;
    height: 360px;
    margin: 10px;
  }

  @media (${devices.laptop}) {
    width: 480px;
    height: 360px;
  }

  @media (${devices.laptopL}) {
    width: 640px;
    height: 480px;
    margin: 5px;
  }

  @media (${devices.desktop}) {
    width: 1000px;
    height: 500px;
    margin: 5px;
    margin-bottom: 30px;
  }
`;

export const ImageCarousel = styled.img`
  width: 320px;
  height: 240px;
  object-fit: contain cover;

  @media (${devices.mobileES}) {
    width: 320px;
    height: 240px;
  }

  @media (${devices.mobileS}) {
    width: 320px;
    height: 240px;
  }

  @media (${devices.mobileM}) {
    width: 320px;
    height: 240px;
  }

  @media (${devices.mobileL}) {
    width: 320px;
    height: 240px;
  }

  @media (${devices.tablet}) {
    width: 480px;
    height: 360px;
  }

  @media (${devices.laptop}) {
    width: 480px;
    height: 360px;
  }

  @media (${devices.laptopL}) {
    width: 640px;
    height: 480px;
  }

  @media (${devices.desktop}) {
    width: 1000px;
    height: 500px;
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
      height: 20px;
      width: 20px;
      margin: 5px;
    }

    .carousel-indicators {
      height: 7.5px;
      width: 7.5px;
    }
  }

  @media (${devices.laptop}) {
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

  @media (${devices.laptopL}) {
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

  @media (${devices.desktop}) {
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

  @media (${devices.mobileES}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 20px;
    margin: 10px;
  }

  @media (${devices.mobileS}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 20px;
    margin: 10px;
  }

  @media (${devices.mobileM}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 20px;
    margin: 10px;
  }

  @media (${devices.mobileL}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 20px;
    margin: 10px;
  }

  @media (${devices.tablet}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 30px;
    margin: 10px;
  }

  @media (${devices.laptop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
    margin: 20px;
  }

  @media (${devices.laptopL}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
    margin: 20px;
  }

  @media (${devices.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
    margin: 20px;
  }
`;

export const SpotifyWrapper = styled.iframe.attrs({
  width: 800,
  height: 500,
})`
  @media (${devices.mobileES}) {
    width: 80%;
    height: 400px;
  }

  @media (${devices.mobileS}) {
    width: 80%;
    height: 400px;
  }

  @media (${devices.mobileM}) {
    width: 80%;
    height: 400px;
  }

  @media (${devices.mobileL}) {
    width: 80%;
    height: 400px;
  }

  @media (${devices.tablet}) {
    width: 80%;
    height: 400px;
  }

  @media (${devices.laptop}) {
    width: 800px;
    height: 500px;
  }

  @media (${devices.laptopL}) {
    width: 800px;
    height: 500px;
  }

  @media (${devices.desktop}) {
    width: 800px;
    height: 500px;
  }
`;

export const LinkStyle = styled.a`
  text-decoration: none;
`;


export const HeadingStyle = styled.h1`
  color: #7e5959;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;

  @media (${devices.mobileES}) {
    margin-top: -96px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileS}) {
    margin-top: -96px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileM}) {
    margin-top: -96px;
    font-weight: 700 !important;
    font-size: 1.5em !important;
    line-height: 20px !important;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.mobileL}) {
    margin-top: -96px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 30px !important;
    letter-spacing: 2px !important;
    margin-bottom: 5px;
  }

  @media (${devices.tablet}) {
    margin-top: -70px;
    font-weight: 700 !important;
    font-size: 2em !important;
    line-height: 40px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.laptop}) {
    margin-top: 55px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.laptopL}) {
    margin-top: 55px;
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

export const HeadingStyle1 = styled.h1`
  color: #7e5959;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;

  @media (${devices.mobileES}) {
    margin-top: 10px;
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
    font-size: 2em !important;
    line-height: 40px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 5px;
  }

  @media (${devices.laptop}) {
    margin-top: 55px;
    font-weight: 700 !important;
    font-size: 3em !important;
    line-height: 40px !important;
    letter-spacing: 4.5px !important;
    margin-bottom: 10px;
  }

  @media (${devices.laptopL}) {
    margin-top: 15px;
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