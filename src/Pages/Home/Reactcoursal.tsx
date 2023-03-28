import React from "react";
import { Carousel } from "react-bootstrap";
import { carouselImg } from "./constant";
import { Reviews, CarouselItem } from "./style";
function ReactCarousel() {
  return (
    <Reviews>
      <Carousel>
        {carouselImg.map((carouselImg) => (
          <CarouselItem key={carouselImg.id}>
            <img src={carouselImg.image} alt={`Review ${carouselImg.id}`} />
          </CarouselItem>
        ))}
      </Carousel>
    </Reviews>
  );
}
export default ReactCarousel;
