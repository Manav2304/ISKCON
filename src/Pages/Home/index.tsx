import React from "react";
import titleBaseUrl from "../../assets/images/title-base.png";
import { carouselImages, titleTiles, sections } from "./constant";
import { ImageTitle, TextStyle, Image, HeadingStyle } from "./style";
import { PageCarousel } from "./PageCarousel";
import { GlobalCarousel } from "./GlobalCarousel";

export const HomePage: React.FC = () => {
  return (
    <div>
      <GlobalCarousel images={carouselImages} />
      {titleTiles.map((titleTile) => (
        <div>
          <HeadingStyle> {titleTile.title}</HeadingStyle>
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
          <HeadingStyle>{section.title}</HeadingStyle>
          <ImageTitle src={titleBaseUrl} alt="Title Image" />
          <Image
            src={section.image}
            alt={`${section.title} Img`}
            className="img-fluid"
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
