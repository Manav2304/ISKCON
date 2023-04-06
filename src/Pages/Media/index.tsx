import React from "react";
import {
  PageWrapper,
  CarouselWrapper,
  YouTubeWrapper,
  Heading,
  ImageWrapper,
  TitleImage,
  TitleName,
} from "./style";
import { darshanImages, sringarImages, opts } from "./constant";
import Carousel from "./Carousel";
import AudioContent from "./Audio";
import titleBaseImg from "../../assets/images/title-base.png";
import YouTube from "react-youtube";

const Media: React.FC = () => {
  return (
    <>
      <Heading> Daily Darshan </Heading>
      <ImageWrapper>
        <TitleImage src={titleBaseImg} alt="TitleBase" />
      </ImageWrapper>
      <PageWrapper>
        <CarouselWrapper>
          <Carousel images={sringarImages} />
          <TitleName>Yesterday's Darshan </TitleName>
        </CarouselWrapper>
        <CarouselWrapper>
          <Carousel images={darshanImages} />
          <TitleName>Today's Darshan </TitleName>
        </CarouselWrapper>
      </PageWrapper>
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
          <AudioContent />
        </PageWrapper>
      </>
    </>
  );
};

export default Media;
