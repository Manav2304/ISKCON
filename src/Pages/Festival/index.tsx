import React from "react";
import { festivals } from "./constant";
import { FestivalCard } from "./FestivalCard";
import { FestivalContainer, HeadingStyle } from "./style";
import { Festival } from "./types";
import titleBaseImg from "../../assets/images/title-base.png";
import {  ImageTitle, TitleWrapper } from "../TitleBase/style";

export const FestivalPage = () => {
  return (
    <>
      <TitleWrapper>
        <HeadingStyle>
          Festival
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
