import React from "react";
import {
  ImageStyle,
  TextStyle,
  HeadingStyle,
  ImageTitle,
  Image,
} from "./style";
import {
  aboutUs,
  history,
  goals,
  philosophy,
  founder,
  carouselImg,
  historyImage,
} from "./constant";
import { GlobalCarousel } from "./DsCarousel";
import titleBaseUrl from "../../assets/images/title-base.png";
import about from "../../assets/images/about.jpg";
import founderAcharya from "../../assets/images/founder-acharya.png";
import goal from "../../assets/images/goal.jpg";
import philosophyImg from "../../assets/images/philosophy.jpg";

export const HomePage: React.FC = () => {
  return (
    <div>
      <GlobalCarousel images={carouselImg} />
      <HeadingStyle>
        <h1>ABOUT US</h1>
        <ImageTitle src={titleBaseUrl} alt="Title Image" />
      </HeadingStyle>
      <ImageStyle>
        <Image src={about} className="rounded" alt="About Img" />
      </ImageStyle>
      <TextStyle>
        {aboutUs.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </TextStyle>
      <HeadingStyle>
        <h1>HISTORY</h1>
        <ImageTitle src={titleBaseUrl} alt="Title Image" />
      </HeadingStyle>
      <GlobalCarousel images={historyImage} />
      <TextStyle>
        {history.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </TextStyle>
      <HeadingStyle>
        <h2>Goals of ISKCON</h2>
        <ImageTitle src={titleBaseUrl} alt="Title Image" />
      </HeadingStyle>
      <ImageStyle>
        <Image src={goal} alt="Goal img" className="rounded" />
      </ImageStyle>
      <TextStyle>
        {goals.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </TextStyle>
      <HeadingStyle>
        <h2>PHILOSOPHY </h2>
        <ImageTitle src={titleBaseUrl} alt="Title Image" />
      </HeadingStyle>
      <ImageStyle>
        <Image src={philosophyImg} className="rounded" alt="Philosophy Img" />
      </ImageStyle>
      <TextStyle>
        {philosophy.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </TextStyle>
      <HeadingStyle>
        <h2>FOUNDER</h2>
        <ImageTitle src={titleBaseUrl} alt="Title Image" />
      </HeadingStyle>
      <ImageStyle>
        <Image src={founderAcharya} alt="Founder Img" className="rounded" />
      </ImageStyle>
      <TextStyle>
        {founder.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </TextStyle>
    </div>
  );
};
