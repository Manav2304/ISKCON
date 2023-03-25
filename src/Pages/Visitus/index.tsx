import React, { useState } from "react";
import {
  dakorImage,
  goushalaImage,
  dakorInfo,
  goushala,
  titleBase,
} from "./constant";
import {
  ServiceWrapper,
  TextWrapper,
  Heading,
  Paragraph,
  Button,
  ImageDiv,
  TitleImage,
} from "./style";
import Carousel from "./Carousel";

const VisitUs = () => {
  const [showMoreDakor, setShowMoreDakor] = useState(false);
  const [showMoreGoushala, setShowMoreGoushala] = useState(false);
  const toggleShowMoreDakor = () => setShowMoreDakor(!showMoreDakor);
  const toggleShowMoreGoushala = () => setShowMoreGoushala(!showMoreGoushala);

  return (
    <ServiceWrapper>
      <TextWrapper>
        <Heading>Dakor Dham</Heading>
        <ImageDiv>
          <TitleImage src={titleBase} alt="TitleBase" />
        </ImageDiv>
        <Carousel images={dakorImage} />
        <Paragraph>
          {dakorInfo.map((paragraph, index) => (
            <p
              key={index}
              style={{ display: showMoreDakor || index < 2 ? "block" : "none" }}
            >
              {paragraph}
            </p>
          ))}
        </Paragraph>
        {dakorInfo.length > 2 && (
          <Button onClick={toggleShowMoreDakor}>
            {showMoreDakor ? "Read less" : "Read more"}
          </Button>
        )}
        <Heading>Goverdhan Goushala</Heading>
        <ImageDiv>
          <TitleImage src={titleBase} alt="TitleBase" />
        </ImageDiv>
        <Carousel images={goushalaImage} />
        <Paragraph>
          {goushala.map((paragraph, index) => (
            <p
              key={index}
              style={{
                display: showMoreGoushala || index < 2 ? "block" : "none",
              }}
            >
              {paragraph}
            </p>
          ))}
        </Paragraph>
        {goushala.length > 2 && (
          <Button onClick={toggleShowMoreGoushala}>
            {showMoreGoushala ? "Read less" : "Read more"}
          </Button>
        )}
      </TextWrapper>
    </ServiceWrapper>
  );
};

export default VisitUs;
