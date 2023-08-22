import React from "react";
import {
  CustomRow,
  CustomCol,
  CustomCard,
  CustomCardImage,
  CustomCardBody,
  CustomCardTitle,
  HeadingStyle,
  ImageTitle,
  TextStyle,
  StyledLink,
  PageWrapper,
} from "./style";
import { paragraphs } from "./constant";
import titlebBaseImage from "../../../assets/images/title-base.png";
import { donationItems } from "./constant"; 

export const DonationMainPage = () => {
  return (
    <div>
      <PageWrapper>
        <div>
          <HeadingStyle>
            Donate
          </HeadingStyle>
          <ImageTitle src={titlebBaseImage} alt="Title Image" />
          <TextStyle>
            <p>{paragraphs}</p>
          </TextStyle>
        </div>
        <CustomRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
          {donationItems.map((item) => (
            <StyledLink key={item.title} to={item.route}>
              <CustomCol xs>
                <CustomCard>
                  <CustomCardImage orientation="top" src={item.image} />
                  <CustomCardBody>
                    <CustomCardTitle>{item.title}</CustomCardTitle>
                  </CustomCardBody>
                </CustomCard>
              </CustomCol>
            </StyledLink>
          ))}
        </CustomRow>
      </PageWrapper>
    </div>
  );
};
