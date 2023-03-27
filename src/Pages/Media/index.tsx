import React from "react";
import { PageWrapper, CarouselWrapper } from "./style";
import { darshan, sringar, titleBase } from "./constant";
import Carousel from "./Carousel";
import { YouTubeVideo } from "./youtube";
import { Heading, ImageDiv, TitleImage } from "./Audio/style";

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
      </PageWrapper>
    </>
  );
};

export default Media;
