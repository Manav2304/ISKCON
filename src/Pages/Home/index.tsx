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
  PageWrapperStyle,
  CarouselStyle,
} from "./style";

export const HomePage: React.FC = () => {
  return (
    <div>
      <PageWrapperStyle>
        <GlobalCarousel images={carouselImages} />
        {titleTiles.map((titleTile) => (
          <div>
            <HeadingStyle>
              <h1>{titleTile.title}</h1>
              <ImageTitle src={titleBaseUrl} alt="Title Image" />
            </HeadingStyle>
            <CarouselStyle>
              <GlobalCarousel images={titleTile.images} />
            </CarouselStyle>
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
              <h2>{section.title}</h2>
              <ImageTitle src={titleBaseUrl} alt="Title Image" />
            </HeadingStyle>
            <ImageStyle>
              <Image
                src={section.image}
                alt={`${section.title} Img`}
                className="rounded"
              />
            </ImageStyle>
            <TextStyle>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </TextStyle>
          </div>
        ))}
      </PageWrapperStyle>
    </div>
  );
};
