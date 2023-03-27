import { useState } from "react";
import { festivals, titleBase } from "./constant";
import { FestivalCard } from "./FestivalCard";
import { FestivalContainer, HeadIng1, ImageDiv, TitleImage } from "./style";

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
      <HeadIng1>
        <h1>Festival</h1>
      </HeadIng1>
      <ImageDiv>
        <TitleImage src={titleBase} alt="TitleBase" />
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
