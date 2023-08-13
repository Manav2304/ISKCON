import React from "react";
import {
  PageWrapper,
  CarouselWrapper,
  YouTubeWrapper,
  ServiceWrapper,
  LecturesWrapper,
  HeadingStyle1,
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
import { ImageTitle, TitleWrapper } from "../TitleBase/style";
import { HeadingStyle } from "./style";
import { getOptsForYoutube } from "./YouTube";

export const Media: React.FC = () => {
  const opts = getOptsForYoutube();

  return (
    <>
      <ServiceWrapper>
        <TitleWrapper>
          <HeadingStyle>
           Daily Darshan
            <ImageTitle src={titleBaseImg} alt="Title Image" />
          </HeadingStyle>
        </TitleWrapper>
        <CarouselWrapper>
          <MediaCarousel images={yesterdayDarshanImages} title={SringarTitle} />
          <MediaCarousel images={todayDarshanImages} title={darshanTitle} />
        </CarouselWrapper>
        <HeadingStyle1>
          Lectures
        </HeadingStyle1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
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