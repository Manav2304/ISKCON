import React from "react";
import {
  address,
  email,
  guestHouse,
  guestNumber1,
  guestNumber2,
  mobileNumber,
  phoneNumber,
} from "./constant";
import {
  Box,
  MapFrame,
  BoxStyle,
  Container,
  GuestBox,
  BoxHeading,
  BoxDetail,
  ContactLink,
} from "./style";
import titleBaseImg from "../../assets/images/title-base.png";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../TitleBase/style";

export const Contact: React.FC = () => {
  return (
    <Container>
      <TitleWrapper>
        <HeadingStyle>
          <h1>Contact Us</h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
      </TitleWrapper>
      <MapFrame
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1311.187149836103!2d72.92189300103102!3d22.549684103735032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e752de042c5%3A0x8361692ec6b1086!2sISKCON%20Vidyanagar(Sri%20Sri%20Radha%20Giridhariji)!5e1!3m2!1sen!2sin!4v1679894745057!5m2!1sen!2sin"
        loading="lazy"
      />
      <BoxStyle className="container">
        <Box>
          <BoxHeading>Contact Number</BoxHeading>
          <BoxDetail>
            <ContactLink href={`tel:${mobileNumber}`}>
              {mobileNumber}
            </ContactLink>
            <br />
            <ContactLink href={`tel:${phoneNumber}`}>{phoneNumber}</ContactLink>
          </BoxDetail>
        </Box>
        <Box>
          <BoxHeading>Email</BoxHeading>
          <BoxDetail>
            <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
          </BoxDetail>
        </Box>
        <Box>
          <BoxHeading>Address</BoxHeading>
          <BoxDetail>
            <ContactLink
              href={`https://goo.gl/maps/oig1BbDfSinEaxYu9`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </ContactLink>
          </BoxDetail>
        </Box>
        <GuestBox>
          <BoxHeading>Guest House Booking </BoxHeading>
          <BoxDetail>
            {guestHouse}
            <br />
            <ContactLink href={`tel=${guestNumber1}`}>
              {guestNumber1}
            </ContactLink>
            <br />
            <ContactLink href={`tel=${guestNumber2}`}>
              {guestNumber2}
            </ContactLink>
          </BoxDetail>
        </GuestBox>
      </BoxStyle>
    </Container>
  );
};
