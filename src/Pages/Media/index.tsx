import React from "react";
import {
  PageWrapper,
  CarouselWrapper,
  YouTubeWrapper,
  Heading,
  ImageWrapper,
  TitleImage,
} from "./style";
import { darshanImages, sringarImages } from "./constant";
import Carousel from "./Carousel";
import { YouTubeVideo } from "./Youtube";
import AudioContent from "./Audio";
import titleBaseImg from "../../assets/images/title-base.png";

const Media: React.FC = () => {
  return (
    <>
      <Heading>Daily Darshan </Heading>
      <ImageWrapper>
        <TitleImage src={titleBaseImg} alt="TitleBase" />
      </ImageWrapper>
      <PageWrapper>
        <CarouselWrapper>
          <Carousel images={sringarImages} />
        </CarouselWrapper>
        <CarouselWrapper>
          <Carousel images={darshanImages} />
        </CarouselWrapper>
        <YouTubeWrapper>
          <YouTubeVideo videoId="R3tNVAtzaAw" />
        </YouTubeWrapper>
        <YouTubeWrapper>
          <YouTubeVideo videoId="Q9TUIuRVc4I" />
        </YouTubeWrapper>
        <AudioContent />
      </PageWrapper>
    </>
  );
};

export default Media;
