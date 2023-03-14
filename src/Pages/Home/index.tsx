import React from "react";
import { StyledCarousel } from "./style";
import { aboutUs1, aboutUs2, aboutUs3, aboutUs4 } from "./constant";
import { AboutUsText } from "./style";
import {
  Goals1,
  Goals2,
  Goals3,
  Goals4,
  Goals5,
  Goals6,
  Goals7,
  Goals8,
} from "./constant";
import {
  History1,
  History2,
  History3,
  History4,
  History5,
  History6,
  History7,
} from "./constant";
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

      <AboutUsText>
        <div className="m1">
          <br />
          <h2 style={{ textAlign: "center", color: "#fc9e39" }}>About Us</h2>
          <br />
          {aboutUs1}
          <br />
          <br />
          {aboutUs2}
          <br />
          <br />
          {aboutUs3}
          <br />
          <br />
          {aboutUs4}
          <br />
          <hr />
          <h2 style={{ textAlign: "center", color: "#fc9e39" }}>History</h2>
          <br />
          {History1}
          <br />
          <br />
          {History2}
          <br />
          <br />
          {History3}
          <br />
          <br />
          {History4}
          <br />
          <br />
          {History5}
          <br />
          <br />
          {History6}
          <br />
          <br />
          {History7}
          <br />
          <br />
          <hr></hr>
          <h2 style={{ textAlign: "center", color: "#fc9e39" }}>
            Goals Of Iskcon
          </h2>

          <br />
          {Goals1}
          <br />
          <br />
          {Goals2}
          <br />
          <br />
          {Goals3}
          <br />
          <br />
          {Goals4}
          <br />
          <br />
          {Goals5}
          <br />
          <br />
          {Goals6}
          <br />
          <br />
          {Goals7}
          <br />
          <br />
          {Goals8}
          <br />
          <br />
        </div>
      </AboutUsText>
    </div>
  );
};

export default MyCarousel;
