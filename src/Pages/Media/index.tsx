import React from "react";
import { PageWrapper, CarouselWrapper } from "./style";
import { IMAGES1, IMAGES2 } from "./constant";
import Carousel from "./Carousel";
import { YouTubeVideo } from "./youtube";

const Media: React.FC = () => {
  return (
    <PageWrapper>
      <CarouselWrapper>
        <Carousel images={IMAGES1} />
      </CarouselWrapper>
      <CarouselWrapper>
        <Carousel images={IMAGES2} />
      </CarouselWrapper>
      <YouTubeVideo videoId="lVk6qJ4cmB8" />
    </PageWrapper>
  );
};

export default Media;
