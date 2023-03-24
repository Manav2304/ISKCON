/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styled from "styled-components";

import { ADDRESS, MOBILE_NUMBER, EMAIL, GUEST_HOUSE_INFO } from "./constant";
import { Box, Container } from "./style";

const MapContainer = styled.div`
  grid-column: 1 / span 2;
`;

export const Contact: React.FC = () => {
  return (
    <Container>
      <MapContainer>
        <h4>Map</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.822512820993!2d72.9239412!3d22.548320499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e755a0a0f43%3A0x2c838153538b28f0!2sIskcon%20Rd%2C%20Patel%20Society%2C%20Vallabh%20Vidyanagar%2C%20Anand%2C%20Gujarat%20388120!5e0!3m2!1sen!2sin!4v1679494883968!5m2!1sen!2sin"
          width="1150"
          height="450"
          loading="lazy"
        ></iframe>
      </MapContainer>

      <Box>
        <h4>Mobile Number</h4>
        <p>{MOBILE_NUMBER}</p>
      </Box>

      <Box>
        <h4>Email</h4>
        <p>{EMAIL}</p>
      </Box>

      <Box>
        <h4>Address</h4>
        <p>{ADDRESS}</p>
      </Box>

      <Box>
        <h4>Guest House Booking </h4>
        {GUEST_HOUSE_INFO}
      </Box>
    </Container>
  );
};
