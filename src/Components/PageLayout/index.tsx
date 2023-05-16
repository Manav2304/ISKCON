import titleBaseImage from "../../assets/images/title-base.png";
import { Paragraph, TextWrapper } from "../../Pages/Services/PageLayout/style";
import {
  HeadingStyle,
  ImageTitle,
  TitleWrapper,
} from "../../Pages/TitleBase/style";

interface FooterTermsProps {
  title: string;
  content: string[];
}

export const FooterTerms: React.FC<FooterTermsProps> = ({ title, content }) => {
  return (
    <div>
      <TextWrapper>
        <TitleWrapper>
          <HeadingStyle>
            <h1>{title}</h1>
            <ImageTitle src={titleBaseImage} alt="Title Image" />
          </HeadingStyle>
        </TitleWrapper>
        <Paragraph>
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Paragraph>
      </TextWrapper>
    </div>
  );
};
