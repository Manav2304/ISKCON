import React from "react";
import titleBaseUrl from "../../assets/images/title-base.png";
import { carouselImages, titleTiles, sections, blog } from "./constant";
import {
  HeadingStyle,
  ImageTitle,
  TextStyle,
  Image,
  BlogContainer,
} from "./style";
import { PageCarousel } from "./PageCarousel";
import { GlobalCarousel } from "./GlobalCarousel";
import { TitleWrapper } from "../TitleBase/style";
import { Blog } from "../Blog/types";
import { BlogCard } from "../Blog/BlogCard";

export const HomePage: React.FC = () => {
  return (
    <div>
      <GlobalCarousel images={carouselImages} />
      {titleTiles.map((titleTile) => (
        <div>
          <HeadingStyle>
            <h1> {titleTile.title}</h1>
          </HeadingStyle>
          <ImageTitle src={titleBaseUrl} alt="Title Image" />
          <PageCarousel images={titleTile.images} />
          <TextStyle>
            {titleTile.paragraphs.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </TextStyle>
        </div>
      ))}
      {sections.map((section) => (
        <div>
          <HeadingStyle>
            <h1>{section.title}</h1>
          </HeadingStyle>
          <ImageTitle src={titleBaseUrl} alt="Title Image" />
          <Image
            src={section.image}
            alt={`${section.title} Img`}
            className="rounded"
          />
          <TextStyle>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </TextStyle>
        </div>
      ))}
      <TitleWrapper>
        <HeadingStyle>
          <h1>Blog</h1>
          <ImageTitle src={titleBaseUrl} alt="Title Image" />
        </HeadingStyle>
      </TitleWrapper>
      <BlogContainer>
        {blog.map((blog: Blog) => (
          <BlogCard key={blog.name} festival={blog} />
        ))}
      </BlogContainer>
    </div>
  );
};
