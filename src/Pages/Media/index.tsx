import React from "react";
import {
  PageWrapper,
  CarouselWrapper,
  YouTubeWrapper,
  ServiceWrapper,
  LecturesWrapper,
} from "./style";
import {
  SringarTitle,
  darshanTitle,
  yesterdayDarshanImages,
  todayDarshanImages,
} from "./constant";
import { AudioContent } from "./Audio";
import titleBaseImg from "../../assets/images/title-base.png";
import YouTube from "react-youtube";
import { MediaCarousel } from "./MediaCarousel";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../TitleBase/style";
import { getOptsForYoutube } from "./YouTube";

export const Media: React.FC = () => {
  const opts = getOptsForYoutube();

  return (
    <>
      <ServiceWrapper>
        <TitleWrapper>
          <HeadingStyle>
            <h1>Daily Darshan</h1>
            <ImageTitle src={titleBaseImg} alt="Title Image" />
          </HeadingStyle>
        </TitleWrapper>
        <CarouselWrapper>
          <MediaCarousel images={yesterdayDarshanImages} title={SringarTitle} />
          <MediaCarousel images={todayDarshanImages} title={darshanTitle} />
        </CarouselWrapper>
        <HeadingStyle>
          <h1>Lectures</h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
        <LecturesWrapper>
          <YouTubeWrapper>
            <YouTube videoId="R3tNVAtzaAw" opts={opts} />
            <YouTube videoId="Q9TUIuRVc4I" opts={opts} />
          </YouTubeWrapper>
        </LecturesWrapper>
        <PageWrapper>
          <AudioContent />
        </PageWrapper>
      </ServiceWrapper>
    </>
  );
};
