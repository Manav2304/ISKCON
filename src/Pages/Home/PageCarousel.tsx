import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StyledPageCarouselWrapper } from "./style";

interface CarouselImage {
  id: number;
  image: string;
}

interface PageCarouselProps {
  images: CarouselImage[];
}

export const PageCarousel: React.FC<PageCarouselProps> = ({ images }) => {
  return (
    <StyledPageCarouselWrapper
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
    >
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.image} alt={`Product ${image.id}`} />
        </div>
      ))}
    </StyledPageCarouselWrapper>
  );
};
