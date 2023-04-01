import React from "react";
import { ImageStyle, TextStyle, HeadingStyle, Image } from "./style";
import titleBase from "../../assets/images/title-base.png";

interface PageLayoutProps {
  title: string;
  content: string[];
  imageUrl: string;
  altText?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  content,
  imageUrl,
  altText = "",
}) => {
  return (
    <div>
      <HeadingStyle>
        <h2>{title}</h2>
        <Image src={titleBase} alt="Title img" />
        <ImageStyle>
          <img src={imageUrl} alt={altText} />
        </ImageStyle>
        <TextStyle>
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </TextStyle>
      </HeadingStyle>
    </div>
  );
};
