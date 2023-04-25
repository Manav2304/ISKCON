import { use100vh } from "react-div-100vh";
import React from "react";
import { Carousel } from "react-bootstrap";
import { Reviews, ImageCarousel, StyleCarousel } from "./style";

interface Props {
  images: { id: number; image: string }[];
}

export const GlobalCarousel: React.FC<Props> = ({ images }) => {
  const height = use100vh();
  const carouselHeight = height ? height : "50vh";
  return (
    <Reviews>
      <StyleCarousel
        style={{ height: carouselHeight }}
        nextIcon={<span className="carousel-control-next-icon" />}
        prevIcon={<span className="carousel-control-prev-icon" />}
        indicators
        nextLabel=""
        prevLabel=""
        interval={3000}
      >
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <ImageCarousel
              style={{ height: carouselHeight }}
              className="rounded"
              src={image.image}
              alt={`Carousel Image ${image.id}`}
            />
          </Carousel.Item>
        ))}
      </StyleCarousel>
    </Reviews>
  );
};
