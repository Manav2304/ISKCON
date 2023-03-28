import { useState } from "react";
import { festivals, TitleBase } from "./constant";
import { FestivalCard } from "./FestivalCard";
import { FestivalContainer, Heading1, ImageDiv, TitleImage } from "./style";

interface Festival {
  name: string;
  date: string;
  image: string;
  description: string;
}

const FestivalPage = () => {
  const [selectedFestivals, setSelectedFestivals] = useState<Festival[]>([]);
  const handleLearnMoreClick = (festival: Festival) => {
    setSelectedFestivals((selectedFestivals) => [
      ...selectedFestivals,
      festival,
    ]);
  };

  const handleShowLessClick = (festival: Festival) => {
    setSelectedFestivals((selectedFestivals) =>
      selectedFestivals.filter(
        (selectedFestival) => selectedFestival !== festival,
      ),
    );
  };

  const isFestivalSelected = (festival: Festival) => {
    return selectedFestivals.some(
      (selectedFestival) => selectedFestival === festival,
    );
  };

  return (
    <>
      <Heading1>
        <h1>Festival</h1>
      </Heading1>
      <ImageDiv>
        <TitleImage src={TitleBase} alt="TitleBase" />
      </ImageDiv>
      <FestivalContainer>
        {festivals.map((festival: Festival) => (
          <FestivalCard
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
