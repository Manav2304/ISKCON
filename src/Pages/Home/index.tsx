import React from "react";
import { StyledCarousel, Style11 } from "./style";
import { aboutUs, history, goals } from "./constant";

const mapAboutUs = aboutUs.map((paragraph) => <p>{paragraph}</p>);
const mapHistory = history.map((paragraph) => <p>{paragraph}</p>);
const mapGoals = goals.map((paragraph) => <p>{paragraph}</p>);

const MyCarousel: React.FC = () => {
  return (
    <div>
      <div>
        <br />
        <StyledCarousel>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://www.shutterstock.com/image-illustration/illustration-lord-krishna-happy-janmashtami-260nw-2027812538.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.shutterstock.com/image-vector/janmashtami-festival-vector-lord-krishna-260nw-2178627335.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
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
      <br />
      <Style11>
        <div className="container">
          <h2 className="m1">About Us</h2>
          {mapAboutUs}
          <h2 className="m1">History</h2>
          {mapHistory}
          <h2 className="m1">Goals</h2>
          {mapGoals}
        </div>
      </Style11>
    </div>
  );
};

export default MyCarousel;
