import React from "react";
import { Carousel } from "react-bootstrap";
import { Reviews, ImageCarousel } from "./style";

interface Props {
  images: { id: number; image: string }[];
}

export const GlobalCarousel: React.FC<Props> = ({ images }) => {
  return (
    <Reviews>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <ImageCarousel
              src={image.image}
              alt={`Carousel Image ${image.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Reviews>
  );
};
