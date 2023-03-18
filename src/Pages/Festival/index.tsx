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

const FestivalPage = () => {
  const [selectedFestivals, setSelectedFestivals] = useState<Festival[]>([]);

  const handleLearnMoreClick = (festival: Festival) => {
    setSelectedFestivals((selectedFestivals) => [...selectedFestivals, festival]);
  };

  const handleShowLessClick = (festival: Festival) => {
    setSelectedFestivals((selectedFestivals) => selectedFestivals.filter((selectedFestival) => selectedFestival !== festival));
  };

  const isFestivalSelected = (festival: Festival) => {
    return selectedFestivals.some((selectedFestival) => selectedFestival === festival);
  };

  return (
    <>
      <HeadIng1>
        <h1>Festival</h1>
      </HeadIng1>
      <FestivalContainer>
        {festivals.map((festival: Festival) => (
          <div key={festival.name}>
            <FestivalImage src={festival.image} />
            <FestivalInfo>
              <HeadIng2>
                <h2>{festival.name}</h2>
              </HeadIng2>
              <ParaGraph1>
                <p>{festival.date}</p>
              </ParaGraph1>
              {isFestivalSelected(festival) ? (
                <>
                  <Description>{festival.description}</Description>
                  <Button>
                    <button onClick={() => handleShowLessClick(festival)}>Show Less</button>
                  </Button>
                </>
              ) : (
                <>
                  <Description>{festival.description.substring(0, 100)}...</Description>
                  <Button>
                    <button onClick={() => handleLearnMoreClick(festival)}>
                      Read More
                    </button>
                  </Button>
                </>
              )}
            </FestivalInfo>
          </div>
        ))}
      </FestivalContainer>
    </>
  );
};

export default FestivalPage;
