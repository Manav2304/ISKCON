import { useState } from "react";
import { festivals } from "./constant";
import {
  Button,
  FestivalContainer,
  FestivalImage,
  FestivalInfo,
  HeadIng2,
  ParaGraph1,
  Description,
  HeadIng1,
} from "./style";

interface Festival {
  name: string;
  date: string;
  image: string;
  description: string;
}

interface FestivalCardProps {
  festival: Festival;
  showMore: boolean;
  onLearnMoreClick: () => void;
  onShowLessClick: () => void;
}

const FestivalCard = ({
  festival,
  showMore,
  onLearnMoreClick,
  onShowLessClick,
}: FestivalCardProps) => {
  const isFestivalSelected = () => showMore;

  return (
    <div>
      <FestivalImage src={festival.image} />
      <FestivalInfo>
        <HeadIng2>
          <h2>{festival.name}</h2>
        </HeadIng2>
        <ParaGraph1>
          <p>{festival.date}</p>
        </ParaGraph1>
        {isFestivalSelected() ? (
          <>
            <Description>{festival.description}</Description>
            <Button>
              <button onClick={() => onShowLessClick()}>Show Less</button>
            </Button>
          </>
        ) : (
          <>
            <Description>{festival.description.substring(0, 100)}...</Description>
            <Button>
              <button onClick={() => onLearnMoreClick()}>Read More</button>
            </Button>
          </>
        )}
      </FestivalInfo>
    </div>
  );
};

export const FestivalPage = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleLearnMoreClick = () => {
    setShowMore(true);
  };

  const handleShowLessClick = () => {
    setShowMore(false);
  };

  return (
    <>
      <HeadIng1>
        <h1>Festival</h1>
      </HeadIng1>
      <FestivalContainer>
        {festivals.map((festival: Festival) => (
          <FestivalCard
            key={festival.name}
            festival={festival}
            showMore={showMore}
            onLearnMoreClick={handleLearnMoreClick}
            onShowLessClick={handleShowLessClick}
          />
        ))}
      </FestivalContainer>
    </>
  );
};
export default FestivalPage;