import { SetStateAction, useState } from "react";
import About from "../../assets/About.jpg";
import image1 from "../../assets/image2.jpg";
import image2 from "../../assets/image2.jpg";
import { StyledCarousel } from "./style";
const images = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: About,
  },
];

export function BootstrapCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <StyledCarousel>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === activeIndex ? "active" : ""}
                aria-current={index === activeIndex ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {images.map(({ src }, index) => (
              <div
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
                key={index}
              >
                <img src={src} className="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            onClick={() =>
              handleSlideChange(
                (activeIndex + images.length - 1) % images.length
              )
            }
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            onClick={() => handleSlideChange((activeIndex + 1) % images.length)}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </StyledCarousel>
    </div>
  );
}
