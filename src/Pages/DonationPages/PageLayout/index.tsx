import { Paragraph, TextWrapper } from "./style";
import titlebBaseImage from "../../../assets/images/title-base.png";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../../TitleBase/style";
// import { HeadingStyle } from "./style";

interface DonationPagesDescriptionProps {
  title: string;
  content: string[];
}

export const DonationPagesDescription: React.FC<
  DonationPagesDescriptionProps
> = ({ title, content }) => {
  return (
    <div>
      <TextWrapper>
        <TitleWrapper>
          <HeadingStyle>
            <p>{title}</p>
          </HeadingStyle>
          <ImageTitle src={titlebBaseImage} alt="Title Image" />
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
