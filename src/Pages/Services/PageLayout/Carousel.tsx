import React from "react";
import { ImageSlide } from "./style";

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const id = `carousel-auto-play-${Math.random()}`;
  return (
    <div
      id={id}
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner">
        {images.map((image) => (
          <div
            key={Math.random()}
            className={`carousel-item ${image === images[0] ? "active" : ""}`}
          >
            <ImageSlide src={image} className="d-block w-100" alt="..." />
          </div>
        ))}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};