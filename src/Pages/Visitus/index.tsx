import React, { useState } from "react";
import { dakorImage, goushalaImage, dakorInfo, goushala } from "./constant";
import titleBaseUrl from "../../assets/images/titelBaseUrl.png";
import {
  ServiceWrapper,
  TextWrapper,
  Heading,
  Paragraph,
  Button,
  ImageDiv,
  TitleImage,
  VisibleParagraph,
  HiddenParagraph,
} from "./style";
import Carousel from "./carousel";

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
          <TitleImage src={titleBaseUrl} alt="TitleBase" />
        </ImageDiv>
        <Carousel images={dakorImage} />
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
        <ImageDiv>
          <TitleImage src={titleBaseUrl} alt="TitleBase" />
        </ImageDiv>
        <Carousel images={goushalaImage} />
        <Paragraph>
          {goushala.map((paragraph) =>
            showMoreGoushala ||
            paragraph === goushala[0] ||
            paragraph === goushala[1] ? (
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

export default VisitUs;
