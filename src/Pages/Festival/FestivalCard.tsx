import { useState } from "react";
import {
  FestivalImage,
  FestivalInfo,
  Heading2,
  Paragraph1,
  Description,
  Button,
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
      <FestivalImage src={festival.image} className="rounded" />
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
        <Button onClick={toggleSelected}>
          {isSelected ? "Read less" : "Read more"}
        </Button>
      </FestivalInfo>
    </div>
  );
};
