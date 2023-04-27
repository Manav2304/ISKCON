import React from "react";
import { festivals } from "./constant";
import { FestivalCard } from "./FestivalCard";
import { FestivalContainer } from "./style";
import { Festival } from "./types";
import titleBaseImg from "../../assets/images/title-base.png";
import {
  HeadingStyle,
  ImageTitle,
  TitleWrapper,
} from "../../Components/TitleBase/style";

export const FestivalPage = () => {
  return (
    <>
      <TitleWrapper>
        <HeadingStyle>
          <h1>Festival</h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
      </TitleWrapper>
      <FestivalContainer>
        {festivals.map((festival: Festival) => (
          <FestivalCard key={festival.name} festival={festival} />
        ))}
      </FestivalContainer>
    </>
  );
};
