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
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.image} alt="#" />
        </div>
      ))}
    </CarouselWrapper>
  );
};
