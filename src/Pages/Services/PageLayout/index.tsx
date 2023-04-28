import { Paragraph, TextWrapper } from "./style";
import titlebBaseImage from "../../../assets/images/title-base.png";
import { PageCarousel } from "./PageCarousel";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../../TitleBase/style";

interface ServiceDescriptionProps {
  title: string;
  content: string[];
  imageUrl: { id: number; image: string }[];
}

export const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  title,
  content,
  imageUrl,
}) => {
  return (
    <div>
      <TextWrapper>
        <TitleWrapper>
          <HeadingStyle>
            <h1>{title}</h1>
            <ImageTitle src={titlebBaseImage} alt="Title Image" />
          </HeadingStyle>
        </TitleWrapper>
        <PageCarousel images={imageUrl} />
        <Paragraph>
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Paragraph>
      </TextWrapper>
    </div>
  );
};
