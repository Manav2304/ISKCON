import {
  Heading,
  ImageWrapper,
  Paragraph,
  TextWrapper,
  TitleImage,
} from "./style";
import titleBaseImage from "../../assets/images/title-base.png";

interface FooterTermsProps {
  title: string;
  content: string[];
}

export const FooterTerms: React.FC<FooterTermsProps> = ({ title, content }) => {
  return (
    <div>
      <TextWrapper>
        <Heading>{title}</Heading>
        <ImageWrapper>
          <TitleImage src={titleBaseImage} alt="TitleBase" />
        </ImageWrapper>
        <Paragraph>
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Paragraph>
      </TextWrapper>
    </div>
  );
};
