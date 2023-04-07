import React, { useState } from "react";
import { dakorImages, goushalImages, dakorInfo, goushalaInfo } from "./constant";
import titleBaseImg from "../../assets/images/title-base.png";
import {
  ServiceWrapper,
  TextWrapper,
  Heading,
  Paragraph,
  Button,
  ImageWrapper,
  TitleImage,
  VisibleParagraph,
  HiddenParagraph,
} from "./style";
import { GlobalCarousel } from "../Home/GlobalCarousel";

export const VisitUs = () => {
  const [showMoreDakor, setShowMoreDakor] = useState(false);
  const [showMoreGoushala, setShowMoreGoushala] = useState(false);
  const toggleShowMoreDakor = () => setShowMoreDakor(!showMoreDakor);
  const toggleShowMoreGoushala = () => setShowMoreGoushala(!showMoreGoushala);

  return (
    <ServiceWrapper>
      <TextWrapper>
        <Heading>Dakor Dham</Heading>
        <ImageWrapper>
          <TitleImage src={titleBaseImg} alt="TitleBase" />
        </ImageWrapper>
        <GlobalCarousel images={dakorImages} />
        <Paragraph>
          {dakorInfo.map((paragraph) =>
            showMoreDakor ||
            paragraph === dakorInfo[0] ||
            paragraph === dakorInfo[1] ? (
              <VisibleParagraph key={paragraph}>{paragraph}</VisibleParagraph>
            ) : (
              <HiddenParagraph key={paragraph}>{paragraph}</HiddenParagraph>
            ),
          )}
        </Paragraph>
        <Button onClick={toggleShowMoreDakor}>
          {showMoreDakor ? "Read less" : "Read more"}
        </Button>
        <Heading>Goverdhan Goushala</Heading>
        <ImageWrapper>
          <TitleImage src={titleBaseImg} alt="TitleBase" />
        </ImageWrapper>
        <GlobalCarousel images={goushalImages} />
        <Paragraph>
          {goushalaInfo.map((paragraph) =>
            showMoreGoushala ||
            paragraph === goushalaInfo[0] ||
            paragraph === goushalaInfo[1] ? (
              <VisibleParagraph key={paragraph}>{paragraph}</VisibleParagraph>
            ) : (
              <HiddenParagraph key={paragraph}>{paragraph}</HiddenParagraph>
            ),
          )}
        </Paragraph>
        <Button onClick={toggleShowMoreGoushala}>
          {showMoreGoushala ? "Read less" : "Read more"}
        </Button>
      </TextWrapper>
    </ServiceWrapper>
  );
};
