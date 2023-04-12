import React from "react";
import { Carousel } from "react-bootstrap";
import {
  Reviews,
  ImageCarousel,
  StyleCarousel,
  PageWrapper,
  TitleName,
} from "./style";

interface Props {
  images: { id: number; image: string }[];
  title: string;
}

export const MediaCarousel: React.FC<Props> = ({ images, title }) => {
  return (
    <PageWrapper>
      <Reviews>
        <StyleCarousel
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
                src={image.image}
                alt={`Carousel Image ${image.id}`}
              />
            </Carousel.Item>
          ))}
        </StyleCarousel>
      </Reviews>
      <TitleName>{title}</TitleName>
    </PageWrapper>
  );
};
