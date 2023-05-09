import React from "react";
import { festivals } from "./constant";
import { BlogCard } from "./BlogCard";
import { FestivalContainer } from "./style";
import { Festival } from "./types";
import titleBaseImg from "../../assets/images/title-base.png";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../TitleBase/style";

export const BlogPage = () => {
  return (
    <>
      <TitleWrapper>
        <HeadingStyle>
          <h1>Blog</h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
      </TitleWrapper>
      <FestivalContainer>
        {festivals.map((festival: Festival) => (
          <BlogCard key={festival.name} festival={festival} />
        ))}
      </FestivalContainer>
    </>
  );
};
