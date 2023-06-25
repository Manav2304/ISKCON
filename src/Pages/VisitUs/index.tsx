import { useState } from "react";
import {
  dakorImages,
  goushalImages,
  dakorInfo,
  goushalaInfo,
} from "./constant";
import titleBaseImg from "../../assets/images/title-base.png";
import {
  ServiceWrapper,
  Paragraph,
  VisibleParagraph,
  HiddenParagraph,
} from "./style";
import { PageCarousel } from "../Services/PageLayout/PageCarousel";
import { Button } from "../Festival/style";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../TitleBase/style";

export const VisitUs = () => {
  const [showMoreDakor, setShowMoreDakor] = useState(false);
  const [showMoreGoushala, setShowMoreGoushala] = useState(false);
  const toggleShowMoreDakor = () => setShowMoreDakor(!showMoreDakor);
  const toggleShowMoreGoushala = () => setShowMoreGoushala(!showMoreGoushala);

  return (
    <ServiceWrapper>
      <TitleWrapper>
        <HeadingStyle>
          <h1>Dakor Dham</h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
      </TitleWrapper>
      <PageCarousel images={dakorImages} />
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
      <Paragraph>
        <Button onClick={toggleShowMoreDakor}>
          {showMoreDakor ? "Read less" : "Read more"}
        </Button>
      </Paragraph>
      <HeadingStyle>
        <h1>Goverdhan Goushala</h1>
        <ImageTitle src={titleBaseImg} alt="Title Image" />
      </HeadingStyle>
      <PageCarousel images={goushalImages} />
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
      <Paragraph>
        <Button onClick={toggleShowMoreGoushala}>
          {showMoreGoushala ? "Read less" : "Read more"}
        </Button>
      </Paragraph>
    </ServiceWrapper>
  );
};
