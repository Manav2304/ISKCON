import React from "react";
import { festivals } from "./constant";
import { FestivalCard } from "./FestivalCard";
import { FestivalContainer, Heading1, ImageDiv, TitleImage } from "./style";
import { Festival } from "./types";
import titleBaseImg from "../../assets/images/title-base.png";
import { HeadingStyle, ImageTitle } from "../Home/style";

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
