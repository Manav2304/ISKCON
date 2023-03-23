import React from "react";
import { Carousel } from "react-bootstrap";
import { carouselimg } from "./constant";
import { Reviews, CarouselItem } from "./style";

function ReactCarousel() {
  return (
    <Reviews>
      <Carousel>
        {carouselimg.map((carouselimg) => (
          <CarouselItem key={carouselimg.id}>
            <img src={carouselimg.image} alt={`Review ${carouselimg.id}`} />
          </CarouselItem>
        ))}
      </Carousel>
    </Reviews>
  );
}

export default ReactCarousel;
