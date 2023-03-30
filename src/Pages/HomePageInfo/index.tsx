import { ImageStyle, TextStyle, HeadingStyle, Image } from "./style";
import titleBase from "../../assets/images/titel-base-image.png";

interface HomePageProps {
  title: string;
  content: string[];
  imageUrl: string;
}

export const HomePageInfo: React.FC<HomePageProps> = ({
  title,
  content,
  imageUrl,
}) => {
  return (
    <div>
      <HeadingStyle>
        <h2>{title}</h2>
        <Image src={titleBase} />
        <ImageStyle>
          <img src={imageUrl} />
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
