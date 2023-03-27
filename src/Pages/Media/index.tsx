import React from "react";
import { PageWrapper, CarouselWrapper } from "./style";
import { IMAGES1, IMAGES2, titleBase } from "./constant";
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
          <Carousel images={IMAGES1} />
        </CarouselWrapper>
        <CarouselWrapper>
          <Carousel images={IMAGES2} />
        </CarouselWrapper>
        <YouTubeVideo videoId="lVk6qJ4cmB8" />
      </PageWrapper>
    </>
  );
};

export default Media;
