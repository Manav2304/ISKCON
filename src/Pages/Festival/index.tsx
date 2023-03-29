import { festivals } from "./constant";
import { FestivalCard } from "./FestivalCard";
import { FestivalContainer, Heading1, ImageDiv, TitleImage } from "./style";
import { Festival } from "./types";
import titleBaseUrl from "../../assets/image/titleBaseUrl.png";

const FestivalPage = () => {
  const handleLearnMoreClick = (festival: Festival) => {
    console.log("Learn more clicked for:", festival);
  };

  const handleShowLessClick = (festival: Festival) => {
    console.log("Show less clicked for:", festival);
  };

  const isFestivalSelected = (festival: Festival) => {
    return false;
  };

  return (
    <>
      <Heading1>
        <h1>Festival</h1>
      </Heading1>
      <ImageDiv>
        <TitleImage src={titleBaseUrl} alt="titleBaseImg" />
      </ImageDiv>
      <FestivalContainer>
        {festivals.map((festival: Festival) => (
          <FestivalCard
            key={festival.name}
            festival={festival}
            isFestivalSelected={isFestivalSelected(festival)}
            handleLearnMoreClick={handleLearnMoreClick}
            handleShowLessClick={handleShowLessClick}
          />
        ))}
      </FestivalContainer>
    </>
  );
};

export default FestivalPage;
