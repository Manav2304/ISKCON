import React from "react";
import { StyledCarousel, ImageStyle, TextStyle, HeadingStyle } from "./style";
import { aboutUs, history, goals, philosophy, founder } from "./constant";
import { Grid } from "./Grid";
import { BootstrapCarousel } from "./BootstrapCarousel";
const mapAboutUs = aboutUs.map((paragraph) => <p>{paragraph}</p>);
const mapHistory = history.map((paragraph) => <p>{paragraph}</p>);
const mapGoals = goals.map((paragraph) => <p>{paragraph}</p>);
const mapPhilosophy = philosophy.map((paragraph) => <p>{paragraph}</p>);
const mapFounder = founder.map((paragraph) => <p>{paragraph}</p>);
const Homepage: React.FC = () => {
  return (
    <div>
      <BootstrapCarousel />
      <div>
        <HeadingStyle>
          <h2>ABOUT US</h2>
          <ImageStyle>
            <Grid />
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
