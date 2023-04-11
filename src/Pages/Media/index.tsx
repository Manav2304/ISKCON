import React from "react";
import {
  PageWrapper,
  CarouselWrapper,
  YouTubeWrapper,
  Heading,
  ImageWrapper,
  TitleImage,
  TitleName,
  TitleWrapper,
} from "./style";
import { darshanImages, sringarImages, opts } from "./constant";
import AudioContent from "./Audio";
import titleBaseImg from "../../assets/images/title-base.png";
import YouTube from "react-youtube";
import { MediaCarousel } from "./MediaCarousel";

export const Media: React.FC = () => {
  return (
    <>
      <Heading> Daily Darshan </Heading>
      <ImageWrapper>
        <TitleImage src={titleBaseImg} alt="TitleBase" />
      </ImageWrapper>
      <CarouselWrapper>
        <MediaCarousel images={sringarImages} />
        <MediaCarousel images={darshanImages} />
      </CarouselWrapper>
      <TitleWrapper>
        <TitleName>Yesterday's Darshan </TitleName>
        <TitleName>Today's Darshan </TitleName>
      </TitleWrapper>
      <>
        <Heading> Lectures </Heading>
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
        <>
          <PageWrapper>
            <AudioContent />
          </PageWrapper>
        </>
      </>
    </>
  );
};
