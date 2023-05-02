import { ContactLink, Paragraph, TextWrapper } from "./style";
import titlebBaseImage from "../../../assets/images/title-base.png";
import { PageCarousel } from "./PageCarousel";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../../TitleBase/style";

interface ServiceDescriptionProps {
  title: string;
  content: string[];
  imageUrl: { id: number; image: string }[];
  contactNumber1: string[];
  contactNumber2: string[];
  emailId: string[];
}

export const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  title,
  content,
  imageUrl,
  contactNumber1,
  contactNumber2,
  emailId,
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
          <ContactLink href={`tel:${contactNumber1}`}>{contactNumber1}</ContactLink>
          <br/>
          <ContactLink href={`tel:${contactNumber2}`}>{contactNumber2}</ContactLink>
          <br/>
          <ContactLink href={`mailto:${emailId}`}>{emailId}</ContactLink>
        </Paragraph>
      </TextWrapper>
    </div>
  );
};
