import React, { useState, useEffect } from "react";
import { ImageSlide } from "./style";

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const id = `carousel-auto-play-${Math.random()}`;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex, images.length]);

  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, key) => (
          <div
            key={Math.random()}
            className={`carousel-item ${key === activeIndex ? "active" : ""}`}
          >
            <ImageSlide src={image} className="d-block w-100" alt="..." />
          </div>
        ))}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
          onClick={() =>
            setActiveIndex((activeIndex - 1 + images.length) % images.length)
          }
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
          onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
