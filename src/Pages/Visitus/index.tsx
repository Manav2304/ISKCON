import { useState } from "react";
import { dakorImage, goushalaImage, dakorInfo, goushalaInfo } from "./constant";
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
import { HeadingStyle, ImageTitle } from "../Home/style";

export const VisitUs = () => {
  const [showMoreDakor, setShowMoreDakor] = useState(false);
  const [showMoreGoushala, setShowMoreGoushala] = useState(false);
  const toggleShowMoreDakor = () => setShowMoreDakor(!showMoreDakor);
  const toggleShowMoreGoushala = () => setShowMoreGoushala(!showMoreGoushala);

  return (
    <ServiceWrapper>
      <TextWrapper>
        <HeadingStyle>
          <h1>Dakor Dham </h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
        <GlobalCarousel images={dakorImage} />
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

        <HeadingStyle>
          <h1>Goverdhan Goushala </h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
        <GlobalCarousel images={goushalaImage} />
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
