import { useState } from "react";
import {
  FestivalImage,
  FestivalInfo,
  Heading2,
  Paragraph1,
  Description,
  ButtonStyle,
} from "./style";
import { Festival } from "./types";

interface FestivalCardProps {
  festival: Festival;
  isFestivalSelected: boolean;
  handleLearnMoreClick: (festival: Festival) => void;
  handleShowLessClick: (festival: Festival) => void;
}

export const FestivalCard = ({
  festival,
  isFestivalSelected,
  handleLearnMoreClick,
  handleShowLessClick,
}: FestivalCardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(isFestivalSelected);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      handleLearnMoreClick(festival);
    } else {
      handleShowLessClick(festival);
    }
  };

  return (
    <div key={festival.name}>
      <FestivalImage src={festival.image} />
      <FestivalInfo>
        <Heading2>
          <h2>{festival.name}</h2>
        </Heading2>
        <Paragraph1>
          <p>{festival.date}</p>
        </Paragraph1>
        {isSelected ? (
          <>
            <Description>{festival.description}</Description>
            <ButtonStyle>
              <button onClick={toggleSelected}>Show Less</button>
            </ButtonStyle>
          </>
        ) : (
          <>
            <Description>
              {festival.description.substring(0, 100)}...
            </Description>
            <ButtonStyle>
              <button onClick={toggleSelected}>Read More</button>
            </ButtonStyle>
          </>
        )}
      </FestivalInfo>
    </div>
  );
};
