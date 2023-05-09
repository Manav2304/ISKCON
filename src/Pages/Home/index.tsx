import React from "react";
import titleBaseUrl from "../../assets/images/title-base.png";
import {
  carouselImages,
  titleTiles,
  sections,
  DesktopCarouselImages,
  TabletCarouselImages,
  MobileCarouselImages,
} from "./constant";
import { GlobalCarousel } from "./GlobalCarousel";
import { HeadingStyle, ImageTitle, TextStyle, Image } from "./style";
import { PageCarousel } from "./PageCarousel";
import { useMediaQuery } from "react-responsive";

export const HomePage: React.FC = () => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 2560 });
  const isLaptopL = useMediaQuery({ minDeviceWidth: 1440 });
  const isLaptop = useMediaQuery({ minDeviceWidth: 1024 });
  const isTablet = useMediaQuery({ minDeviceWidth: 768, maxDeviceWidth: 1023 });
  const isMobileL = useMediaQuery({ minDeviceWidth: 425 });
  const isMobileM = useMediaQuery({ minDeviceWidth: 375 });
  const isMobileS = useMediaQuery({ minDeviceWidth: 320 });
  const isMobileES = useMediaQuery({ minDeviceWidth: 100 });

  let carouselImages: { id: number; image: string }[] = [];
  if (isDesktop) {
    carouselImages = DesktopCarouselImages;
  } else if (isTablet) {
    carouselImages = TabletCarouselImages;
  } else if (isMobileL) {
    carouselImages = MobileCarouselImages;
  }
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
    </div>
  );
};
