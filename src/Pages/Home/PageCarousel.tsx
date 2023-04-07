import React from "react";
import { Carousel } from "react-bootstrap";
import { Reviews, PageImageCarousel, PageStyleCarousel } from "./style";

interface Props {
  images: { id: number; image: string }[];
}

export const PageCarousel: React.FC<Props> = ({ images }) => {
  return (
    <Reviews>
      <PageStyleCarousel
        nextIcon={<span className="carousel-control-next-icon" />}
        prevIcon={<span className="carousel-control-prev-icon" />}
        indicators
        nextLabel=""
        prevLabel=""
        interval={3000}
      >
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <PageImageCarousel
              src={image.image}
              alt={`Carousel Image ${image.id}`}
            />
          </Carousel.Item>
        ))}
      </PageStyleCarousel>
    </Reviews>
  );
};
