import {
  Heading,
  ImageWrapper,
  Paragraph,
  TextWrapper,
  TitleImage,
} from "./style";
import titlebBaseImage from "../../../assets/images/title-base.png";
import { Carousel } from "./Carousel";

interface ServiceDiscriptionProps {
  title: string;
  content: string[];
  imageUrl: string[];
}

export const ServiceDiscription: React.FC<ServiceDiscriptionProps> = ({
  title,
  content,
  imageUrl,
}) => {
  const mappedContent = content.map((paragraph) => <p>{paragraph}</p>);

  return (
    <div>
      <TextWrapper>
        <Heading>{title}</Heading>
        <ImageWrapper>
          <TitleImage src={titlebBaseImage} alt="TitleBase" />
        </ImageWrapper>
        <Carousel images={imageUrl} />
        <Paragraph>{mappedContent}</Paragraph>
      </TextWrapper>
    </div>
  );
};
