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

export const ServiceWrapper = styled.div`
  padding-top: 80px;
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

export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  text-align: center;

  @media (${devices.mobileES}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.mobileS}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.mobileM}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.mobileL}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.tablet}) {
    font-size: 1rem;
    padding: 20px;
  }

  @media (${devices.laptop}) {
    font-size: 2rem;
    padding: 40px;
  }

  @media (${devices.laptopL}) {
    font-size: 2rem;
    padding: 50px;
  }

  @media (${devices.desktop}) {
    font-size: 2rem;
    padding: 50px;
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
  // flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
`;

export const LecturesWrapper = styled.div`
  display: flex;
  // flex-wrap: wrap;
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
    flex-direction: row;
    gap: 10px;
  }

  @media (${devices.mobileL}) {
    flex-direction: row;
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
  color: #7e5959;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  margin-top: 30px;
  margin-bottom: 30px;
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
