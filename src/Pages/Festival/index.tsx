import { useState } from "react";
import { festivals } from "./constant";
import { Button, FestivalContainer, FestivalImage, FestivalInfo, HeadIng2, ParaGraph1, Description, HeadIng1 } from "./style";

interface Festival {
  name: string;
  date: string;
  image: string;
  description: string;
}

const FestivalPage = () => {
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(
    null
  );

  const handleLearnMoreClick = (festival: Festival) => {
    setSelectedFestival(festival);
  };

  const handleShowLessClick = () => {
    setSelectedFestival(null);
  };

  return (
    <>
      <HeadIng1><h1>Festival</h1></HeadIng1>
      <FestivalContainer>
        {festivals.map((festival: Festival) => (
          <div key={festival.name}>
            <FestivalImage src={festival.image} />
            <FestivalInfo>
              <HeadIng2><h2>{festival.name}</h2></HeadIng2>
              <ParaGraph1><p>{festival.date}</p></ParaGraph1>
              {selectedFestival === festival ? (
                <>
                  <Description>{festival.description}</Description>
                  <Button>
                    <button onClick={handleShowLessClick}>Show Less</button>
                  </Button>
                </>
              ) : (
                <>
                  <Description>{festival.description.substring(0, 100)}...</Description>
                  <Button>
                    <button onClick={() => handleLearnMoreClick(festival)}>Read More</button>
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
