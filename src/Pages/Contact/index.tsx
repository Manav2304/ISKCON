import React from "react";
import { address, email, guestHouse, mobileNumber } from "./constant";
import {
  Box,
  Container,
  Heading,
  MapContainer,
  MapFrame,
  TitleBaseImgWrapper,
  TitleBaseImg,
} from "./style";
import titleBaseImg from "../../assets/images/title-base.png";

export const Contact: React.FC = () => {
  return (
    <Container>
      <MapContainer>
        <Heading>Contact Us</Heading>
        <TitleBaseImgWrapper>
          <TitleBaseImg src={titleBaseImg} />
        </TitleBaseImgWrapper>
        <MapFrame
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1311.187149836103!2d72.92189300103102!3d22.549684103735032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e752de042c5%3A0x8361692ec6b1086!2sISKCON%20Vidyanagar(Sri%20Sri%20Radha%20Giridhariji)!5e1!3m2!1sen!2sin!4v1679894745057!5m2!1sen!2sin"
          loading="lazy"
        />
      </MapContainer>

      <Box>
        <h2>Mobile Number</h2>
        <p>{mobileNumber}</p>
      </Box>
      <Box>
        <h2>Email</h2>
        <p>{email}</p>
      </Box>
      <Box>
        <h2>Address</h2>
        <p>{address}</p>
      </Box>
      <Box>
        <h2>Guest House Booking </h2>
        <p>{guestHouse}</p>
      </Box>
    </Container>
  );
};
