import React from "react";
import { ImageStyle, TextStyle, HeadingStyle, Image } from "./style";
import { aboutUs, history, goals, philosophy, founder } from "./constant";
import Titlebase from "../../assets/Titel Base 16bit.png";

import about from "../../assets/About.jpg";
import ReactCarousel from "./Reactcoursal";
const mapAboutUs = aboutUs.map((paragraph) => <p>{paragraph}</p>);
const mapHistory = history.map((paragraph) => <p>{paragraph}</p>);
const mapGoals = goals.map((paragraph) => <p>{paragraph}</p>);
const mapPhilosophy = philosophy.map((paragraph) => <p>{paragraph}</p>);
const mapFounder = founder.map((paragraph) => <p>{paragraph}</p>);
const homePage: React.FC = () => {
  return (
    <div>
      <ReactCarousel />
      <HeadingStyle>
        <h1>ABOUT US</h1>
        <Image src={Titlebase} />
        <ImageStyle>
          <img src={about} className="rounded" />
        </ImageStyle>
        <TextStyle> {mapAboutUs}</TextStyle>
        <h2>HISTORY</h2>
        <Image src={Titlebase} />

        <ImageStyle>
          <img src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg" />
        </ImageStyle>
        <TextStyle>{mapHistory}</TextStyle>
        <h2>Goals of ISKCON</h2>
        <Image src={Titlebase} />

        <ImageStyle></ImageStyle>
        <TextStyle>{mapGoals}</TextStyle>

        <h2>PHILOSOPHY </h2>
        <Image src={Titlebase} />

        <ImageStyle>
          <img src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg" />
        </ImageStyle>
        <TextStyle> {mapPhilosophy}</TextStyle>
        <h2>FOUNDER</h2>
        <Image src={Titlebase} />

        <ImageStyle>
          <img src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg" />
        </ImageStyle>
        <TextStyle>{mapFounder}</TextStyle>
      </HeadingStyle>
    </div>
  );
};

export default homePage;
