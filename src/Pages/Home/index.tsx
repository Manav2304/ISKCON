import React from "react";
import {
  ImageStyle,
  TextStyle,
  HeadingStyle,
  ImageTitle,
  Image,
} from "./style";
import { carouselImg } from "./constant";
import { GlobalCarousel } from "./GlobalCarousel";
import titleBaseUrl from "../../assets/images/title-base.png";
import { titletile } from "./constant";

export const HomePage: React.FC = () => {
  return (
    <div>
      <GlobalCarousel images={carouselImg} />
      {titletile.map((titletile) => (
        <div>
          <HeadingStyle>
            <h1>{titletile.title}</h1>
            <ImageTitle src={titleBaseUrl} alt="Title Image" />
          </HeadingStyle>
          {titletile.images && <GlobalCarousel images={titletile.images} />}
          <ImageStyle>
            <Image
              src={titletile.image}
              className="rounded"
              alt={`${titletile.title} Image`}
            />
          </ImageStyle>
          <TextStyle>
            {titletile.content.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </TextStyle>
        </div>
      ))}
    </div>
  );
};
