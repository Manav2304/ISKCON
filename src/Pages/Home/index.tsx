import React from "react";
import titleBaseUrl from "../../assets/images/title-base.png";
import { carouselImages, titleTiles, sections } from "./constant";
import { GlobalCarousel } from "./GlobalCarousel";
import {
  HeadingStyle,
  ImageTitle,
  ImageStyle,
  TextStyle,
  Image,
} from "./style";

export const HomePage: React.FC = () => {
  return (
    <div>
      <GlobalCarousel images={carouselImages} />
      {titleTiles.map((titleTiles) => (
        <div>
          <HeadingStyle>
            <h1>{titleTiles.title}</h1>
            <ImageTitle src={titleBaseUrl} alt="Title Image" />
          </HeadingStyle>
          <GlobalCarousel images={titleTiles.images} />
          <TextStyle>
            {titleTiles.paragraphs.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </TextStyle>
        </div>
      ))}
      {sections.map((sections) => (
        <div>
          <HeadingStyle>
            <h2>{sections.title}</h2>
            <ImageTitle src={titleBaseUrl} alt="Title Image" />
          </HeadingStyle>
          <ImageStyle>
            <Image
              src={sections.image}
              alt={`${sections.title} Img`}
              className="rounded"
            />
          </ImageStyle>
          <TextStyle>
            {sections.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </TextStyle>
        </div>
      ))}
    </div>
  );
};
