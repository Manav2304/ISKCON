import { ContactLink, Paragraph, TextWrapper } from "./style";
import titlebBaseImage from "../../../assets/images/title-base.png";
import { PageCarousel } from "./PageCarousel";
import React from "react";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../../TitleBase/style";

interface ServiceDescriptionProps {
  title: string;
  content: string[];
  imageUrl: { id: number; image: string }[];
  contactNumber: { id: number; number: string }[];
  emailId?: string[];
}

export const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  title,
  content,
  imageUrl,
  contactNumber,
  emailId,
}) => {
  return (
    <div>
      <TextWrapper>
        <TitleWrapper>
          <HeadingStyle>
         {title}
          </HeadingStyle>
            <ImageTitle src={titlebBaseImage} alt="Title Image" />
        </TitleWrapper>
        <PageCarousel images={imageUrl} />
        <Paragraph>
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {contactNumber.map((contact) => (
            <React.Fragment key={contact.id}>
              <ContactLink href={`tel:${contact.number}`}>
                {contact.number}
              </ContactLink>
              <br />
            </React.Fragment>
          ))}
          <ContactLink href={`mailto:${emailId}`}>{emailId}</ContactLink>
        </Paragraph>
      </TextWrapper>
    </div>
  );
};
