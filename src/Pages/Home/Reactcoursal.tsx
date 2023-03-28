import { Carousel } from "react-bootstrap";
import { carouselImg } from "./constant";
import { Reviews, CarouselItem, ImageCarousel } from "./style";
function ReactCarousel() {
  return (
    <Reviews>
      <Carousel>
        {carouselImg.map((carouselImg) => (
          <CarouselItem key={carouselImg.id}>
            <ImageCarousel
              src={carouselImg.image}
              alt={`Review ${carouselImg.id}`}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </Reviews>
  );
}
export default ReactCarousel;
