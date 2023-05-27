import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselWrapper } from "./style";

interface CarouselImage {
  id: number;
  image: string;
}

interface GlobalCarouselProps {
  images: CarouselImage[];
}

export const GlobalCarousel: React.FC<GlobalCarouselProps> = ({ images }) => {
  return (
    <CarouselWrapper
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
    >
      {/* <Carousel > */}
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.image} />
        </div>
      ))}
      {/* </Carousel> */}
    </CarouselWrapper>
  );
};

// ReactDOM.render(
//   <GlobalCarousel images={[]} />,
//   document.querySelector(".demo-carousel"),
// );
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
