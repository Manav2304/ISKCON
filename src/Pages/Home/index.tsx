import React from "react";
import {
  ImageStyle,
  TextStyle,
  HeadingStyle,
  ImageTitle,
  Image,
} from "./style";
import { carouselImages } from "./constant";
import { GlobalCarousel } from "./GlobalCarousel";
import titleBaseUrl from "../../assets/images/title-base.png";
import { titleTiles } from "./constant";

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
          {titleTiles.images && <GlobalCarousel images={titleTiles.images} />}
          <ImageStyle>
            <Image
              src={titleTiles.image}
              className="rounded"
              alt={`${titleTiles.title} Image`}
            />
          </ImageStyle>
          <TextStyle>
            {titleTiles.content.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </TextStyle>
        </div>
      ))}
    </div>
  );
};
