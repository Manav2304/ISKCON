import React from "react";
import {
  PageWrapper,
  CarouselWrapper,
  Heading,
  ImageDiv,
  TitleImage,
} from "./style";
import { darshan, sringar, titleBase } from "./constant";
import Carousel from "./Carousel";
import { YouTubeVideo } from "./Youtube";
import AudioContent from "./Audio";

const Media: React.FC = () => {
  return (
    <>
      <Heading>Live Darshan </Heading>
      <ImageDiv>
        <TitleImage src={titleBase} alt="TitleBase" />
      </ImageDiv>
      <PageWrapper>
        <CarouselWrapper>
          <Carousel images={sringar} />
        </CarouselWrapper>
        <CarouselWrapper>
          <Carousel images={darshan} />
        </CarouselWrapper>
        <YouTubeVideo videoId="lVk6qJ4cmB8" />
        <AudioContent />
      </PageWrapper>
    </>
  );
};

export default Media;
