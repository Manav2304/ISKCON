import React from "react";
import { ImageStyle, TextStyle, HeadingStyle, Image } from "./style";
import { aboutUs, history, goals, philosophy, founder } from "./constant";
import titleBaseUrl from "../../assets/images/titel-base-image.png";
import about from "../../assets/images/about.jpg";
import { HomeCarousel } from "./DsCarousel";

export const HomePage: React.FC = () => {
  return (
    <div>
      <HomeCarousel />
      <HeadingStyle>
        <h1>ABOUT US</h1>
        <Image src={titleBaseUrl} alt="Title Image" />
        <ImageStyle>
          <img src={about} className="rounded" alt="About Img" />
        </ImageStyle>
        <TextStyle>
          {aboutUs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </TextStyle>
        <h2>HISTORY</h2>
        <Image src={titleBaseUrl} alt="Title Image" />
        <ImageStyle>
          <img
            src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
            alt="History Img"
          />
        </ImageStyle>
        <TextStyle>
          {history.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </TextStyle>
        <h2>Goals of ISKCON</h2>
        <Image src={titleBaseUrl} alt="Title Image" />
        <TextStyle>
          {goals.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </TextStyle>
        <h2>PHILOSOPHY </h2>
        <Image src={titleBaseUrl} alt="Title Image" />
        <ImageStyle>
          <img
            src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
            alt="Philosophy Img"
          />
        </ImageStyle>
        <TextStyle>
          {philosophy.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </TextStyle>
        <h2>FOUNDER</h2>
        <Image src={titleBaseUrl} alt="Title Image" />
        <ImageStyle>
          <img
            src="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
            alt="Founder Img"
          />
        </ImageStyle>
        <TextStyle>
          {founder.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </TextStyle>
      </HeadingStyle>
    </div>
  );
};
