import { ImageStyle, TextStyle, HeadingStyle, Image } from "./style";
import TitleBase from "../../assets/images/titelBaseImg.png";

interface TextSectionProps {
  title: string;
  content: string[];
  imageUrl: string;
}

export const TextSection: React.FC<TextSectionProps> = ({
  title,
  content,
  imageUrl,
}) => {
  const mappedContent = content.map((paragraph) => (
    <p key={paragraph}>{paragraph}</p>
  ));

  return (
    <div>
      <HeadingStyle>
        <h2>{title}</h2>
        <Image src={TitleBase} />
        <ImageStyle>
          <img src={imageUrl} />
        </ImageStyle>
        <TextStyle>{mappedContent}</TextStyle>
      </HeadingStyle>
    </div>
  );
};
