import titleBaseImage from "../../../assets/images/title-base.png";
// import { PageCarousel } from "../../Services/PageLayout/PageCarousel";
import { Paragraph, TextWrapper } from "../../Services/PageLayout/style";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../../TitleBase/style";
import { Datestyle, Image } from "./style";

interface FestivalProps {
  title: string;
  content: string[];
  date: string;
  // imageUrl: { id: number; image: string }[];
  imageUrl: string;
}

export const Festival: React.FC<FestivalProps> = ({
  title,
  content,
  date,
  imageUrl,
}) => {
  return (
    <div>
      <TextWrapper>
        <TitleWrapper>
          <HeadingStyle>
            <h1>{title}</h1>
            <ImageTitle src={titleBaseImage} alt="Title Image" />
          </HeadingStyle>
        </TitleWrapper>
        {/* <PageCarousel images={imageUrl} /> */}
        <Image>
          <img src={imageUrl} alt="Festival" />
          {/* {imageUrl.map((image) => (
            <img key={image} alt="Festival">
              src={image}
            </img>
          ))} */}
        </Image>
        <Datestyle> {date}</Datestyle>
        <Paragraph>
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Paragraph>
      </TextWrapper>
    </div>
  );
};
