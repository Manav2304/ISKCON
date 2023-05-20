import { Paragraph, TextWrapper } from "./style";
import titlebBaseImage from "../../../assets/images/title-base.png";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../../TitleBase/style";
import { Donation } from "../Donation";
import { Payment } from "../Payment";

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
            <h1>{title}</h1>
            <ImageTitle src={titlebBaseImage} alt="Title Image" />
          </HeadingStyle>
        </TitleWrapper>
        <Paragraph>
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Paragraph>
        <Payment />
        <Donation />
      </TextWrapper>
    </div>
  );
};
