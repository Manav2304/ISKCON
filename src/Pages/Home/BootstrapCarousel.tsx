import { SetStateAction, useState } from "react";
import bgimage from "../../assets/bgimage.png";
import { StyledCarousel } from "./style";
const images = [
  {
    src: "https://www.shutterstock.com/image-illustration/illustration-lord-krishna-happy-janmashtami-260nw-2027812538.jpg",
    caption: "First slide label",
    description: "Some representative placeholder content for the first slide.",
  },
  {
    src: "https://www.shutterstock.com/image-vector/janmashtami-festival-vector-lord-krishna-260nw-2178627335.jpg",
    caption: "Second slide label",
    description:
      "Some representative placeholder content for the second slide.",
  },
  {
    src: bgimage,
    caption: "Third slide label",
    description: "Some representative placeholder content for the third slide.",
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
            {images.map(({ src, caption, description }, index) => (
              <div
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
                key={index}
              >
                <img src={src} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{caption}</h5>
                  <p>{description}</p>
                </div>
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
