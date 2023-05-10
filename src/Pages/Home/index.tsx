import React from "react";
import titleBaseUrl from "../../assets/images/title-base.png";
import { carouselImages, titleTiles, sections } from "./constant";
import {
  HeadingStyle,
  ImageTitle,
  TextStyle,
  Image,
  MainWrapper,
} from "./style";
import { PageCarousel } from "./PageCarousel";

export const HomePage: React.FC = () => {
  return (
    <div>
      <MainWrapper>
        <PageCarousel images={carouselImages} />
      </MainWrapper>
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
    </div>
  );
};
