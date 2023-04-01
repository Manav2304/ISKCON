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
}

export const FestivalCard = ({ festival }: FestivalCardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div>
      <FestivalImage src={festival.image} />
      <FestivalInfo>
        <Heading2>
          <h2>{festival.name}</h2>
        </Heading2>
        <Paragraph1>
          <p>{festival.date}</p>
        </Paragraph1>
        <Description>
          {isSelected
            ? festival.description
            : `${festival.description.substring(0, 100)}...`}
        </Description>
        <ButtonStyle>
          <button onClick={toggleSelected}>
            {isSelected ? "Show Less" : "Read More"}
          </button>
        </ButtonStyle>
      </FestivalInfo>
    </div>
  );
};