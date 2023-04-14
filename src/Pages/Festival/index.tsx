import React from "react";
import { festivals } from "./constant";
import { FestivalCard } from "./FestivalCard";
import { FestivalContainer, HeadingStyle, ImageTitle } from "./style";
import { Festival } from "./types";
import titleBaseImg from "../../assets/images/title-base.png";

export const FestivalPage = () => {
  return (
    <>
      <HeadingStyle>
        <h1>Festival</h1>
        <ImageTitle src={titleBaseImg} alt="Title Image" />
      </HeadingStyle>
      <FestivalContainer>
        {festivals.map((festival: Festival) => (
          <FestivalCard key={festival.name} festival={festival} />
        ))}
      </FestivalContainer>
    </>
  );
};
