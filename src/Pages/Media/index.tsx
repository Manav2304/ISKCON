import React from "react";
import {
  PageWrapper,
  CarouselWrapper,
  YouTubeWrapper,
  Heading,
  ImageDiv,
  TitleImage,
} from "./style";
import { darshan, sringar } from "./constant";
import Carousel from "./Carousel";
import { YouTubeVideo } from "./Youtube";
import AudioContent from "./Audio";
import titleBaseUrl from "../../assets/images/title-base-url.png";

const Media: React.FC = () => {
  return (
    <>
      <Heading>Live Darshan </Heading>
      <ImageDiv>
        <TitleImage src={titleBaseUrl} alt="TitleBase" />
      </ImageDiv>
      <PageWrapper>
        <CarouselWrapper>
          <Carousel images={sringar} />
        </CarouselWrapper>
        <CarouselWrapper>
          <Carousel images={darshan} />
        </CarouselWrapper>
        <YouTubeWrapper>
          <YouTubeVideo videoId="lVk6qJ4cmB8" />
        </YouTubeWrapper>
        <YouTubeWrapper>
          <YouTubeVideo videoId="lVk6qJ4cmB8" />
        </YouTubeWrapper>
        <AudioContent />
      </PageWrapper>
    </>
  );
};

export default Media;
