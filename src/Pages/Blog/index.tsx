import React from "react";
import { blog } from "./constant";
import { BlogCard } from "./BlogCard";
import { BlogContainer } from "./style";
import { Blog } from "./types";
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
      <BlogContainer>
        {blog.map((blog: Blog) => (
          <BlogCard key={blog.name} festival={blog} />
        ))}
      </BlogContainer>
    </>
  );
};
