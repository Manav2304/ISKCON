import React from "react";
import { StyledCarousel, ImageStyle, TextStyle, HeadingStyle } from "./style";
import { aboutUs, history, goals, philosophy, founder } from "./constant";
import bgimage from "../../assets/bgimage.png";
import { ExampleComponent } from "./grid";
const mapAboutUs = aboutUs.map((paragraph) => <p>{paragraph}</p>);
const mapHistory = history.map((paragraph) => <p>{paragraph}</p>);
const mapGoals = goals.map((paragraph) => <p>{paragraph}</p>);
const mapPhilosophy = philosophy.map((paragraph) => <p>{paragraph}</p>);
const mapFounder = founder.map((paragraph) => <p>{paragraph}</p>);
const Homepage: React.FC = () => {
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
                <img src={bgimage} className="d-block w-100" alt="" />
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
      <div>
        <HeadingStyle>
          <h2>ABOUT US</h2>
          <ImageStyle>
            <ExampleComponent />
          </ImageStyle>
          <TextStyle> {mapAboutUs}</TextStyle>
          <h2>HISTORY</h2>
          <ImageStyle>
            <img src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg" />
          </ImageStyle>
          <TextStyle>{mapHistory}</TextStyle>
          <h2>Goals of ISKCON</h2>
          <ImageStyle></ImageStyle>
          <TextStyle>{mapGoals}</TextStyle>

          <h2>PHILOSOPHY </h2>
          <ImageStyle>
            <img src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg" />
          </ImageStyle>
          <TextStyle> {mapPhilosophy}</TextStyle>
          <h2>FOUNDER</h2>
          <ImageStyle>
            <img src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg" />
          </ImageStyle>
          <TextStyle>{mapFounder}</TextStyle>
        </HeadingStyle>
      </div>
    </div>
  );
};

export default Homepage;
