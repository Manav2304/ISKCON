import React from "react";
import {
  PageWrapper,
  CarouselWrapper,
  YouTubeWrapper,
  ServiceWrapper,
  HeadingStyle,
  ImageTitle,
} from "./style";
import {
  darshanImages,
  sringarImages,
  SringarTitle,
  darshanTitle,
  opts,
} from "./constant";
import { AudioContent } from "./Audio";
import titleBaseImg from "../../assets/images/title-base.png";
import YouTube from "react-youtube";
import { MediaCarousel } from "./MediaCarousel";

export const Media: React.FC = () => {
  return (
    <>
      <ServiceWrapper>
        <HeadingStyle>
          <h1>Daily Darshan</h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
        <CarouselWrapper>
          <MediaCarousel images={sringarImages} title={SringarTitle} />
          <MediaCarousel images={darshanImages} title={darshanTitle} />
        </CarouselWrapper>
        <HeadingStyle>
          <h1>Lectures</h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
        <PageWrapper>
          <YouTubeWrapper>
            <YouTube videoId="R3tNVAtzaAw" opts={opts} />
          </YouTubeWrapper>
          <YouTubeWrapper>
            <YouTube videoId="Q9TUIuRVc4I" opts={opts} />
          </YouTubeWrapper>
        </PageWrapper>
        <PageWrapper>
          <AudioContent />
        </PageWrapper>
      </ServiceWrapper>
    </>
  );
};
