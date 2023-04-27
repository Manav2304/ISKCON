import {
  ContactLink,
  Heading,
  ImageWrapper,
  Paragraph,
  TextWrapper,
  TitleImage,
} from "./style";
import titlebBaseImage from "../../../assets/images/title-base.png";
import { PageCarousel } from "./PageCarousel";
import React from "react";

interface ServiceDescriptionProps {
  title: string;
  content: string[];
  imageUrl: { id: number; image: string }[];
  contactNumber: string[][];
  emailId: string[];
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
        <Heading>{title}</Heading>
        <ImageWrapper>
          <TitleImage src={titlebBaseImage} alt="TitleBase" />
        </ImageWrapper>
        <PageCarousel images={imageUrl} />
        <Paragraph>
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {contactNumber.map((contact, index) => (
            <React.Fragment key={index}>
              <ContactLink href={`tel:${contactNumber}`}>{contactNumber}</ContactLink>
              <br/>
            </React.Fragment>
          ))}
          <ContactLink href={`mailto:${emailId}`}>{emailId}</ContactLink>
        </Paragraph>
      </TextWrapper>
    </div>
  );
};

