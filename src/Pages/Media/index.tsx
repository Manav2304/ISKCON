import React from "react";
import {
  PageWrapper,
  CarouselWrapper,
  YouTubeWrapper,
  Heading,
  ImageWrapper,
  TitleImage,
  ServiceWrapper,
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
        <Heading>Daily Darshan</Heading>
        <ImageWrapper>
          <TitleImage src={titleBaseImg} alt="TitleBase" />
        </ImageWrapper>
        <CarouselWrapper>
          <MediaCarousel images={sringarImages} title={SringarTitle} />
          <MediaCarousel images={darshanImages} title={darshanTitle} />
        </CarouselWrapper>
        <Heading>Lectures</Heading>
        <ImageWrapper>
          <TitleImage src={titleBaseImg} alt="TitleBase" />
        </ImageWrapper>
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
