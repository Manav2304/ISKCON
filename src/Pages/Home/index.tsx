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
import { titleTile } from "./constant";

export const HomePage: React.FC = () => {
  return (
    <div>
      <GlobalCarousel images={carouselImages} />
      {titleTile.map((titleTile) => (
        <div>
          <HeadingStyle>
            <h1>{titleTile.title}</h1>
            <ImageTitle src={titleBaseUrl} alt="Title Image" />
          </HeadingStyle>
          {titleTile.images && <GlobalCarousel images={titleTile.images} />}
          <ImageStyle>
            <Image
              src={titleTile.image}
              className="rounded"
              alt={`${titleTile.title} Image`}
            />
          </ImageStyle>
          <TextStyle>
            {titleTile.content.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </TextStyle>
        </div>
      ))}
    </div>
  );
};
