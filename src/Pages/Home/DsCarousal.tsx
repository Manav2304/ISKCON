import { Carousel } from "react-bootstrap";
import { carouselImg } from "./constant";
import { Reviews, ImageCarousel } from "./style";

export const ReactCarousel = () => {
  return (
    <Reviews>
      <Carousel>
        {carouselImg.map((carouselItem) => (
          <Carousel.Item key={carouselItem.id}>
            <ImageCarousel
              src={carouselItem.image}
              alt={`Carousel Image  ${carouselItem.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Reviews>
  );
};
