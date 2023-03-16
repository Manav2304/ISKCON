import { useState } from "react";
import { festivals } from "./constant";
import { Button, FestivalContainer, FestivalImage, FestivalInfo } from "./style";

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
    if (selectedFestival === festival) {
      setSelectedFestival(null);
    } else {
      setSelectedFestival(festival);
    }
  };

  return (
    <>
      <h1>Festival</h1>
      <FestivalContainer>
        {festivals.map((festival: Festival) => (
          <div key={festival.name}>
            <FestivalImage src={festival.image} />
            <FestivalInfo>
              <h2>{festival.name}</h2>
              <p>{festival.date}</p>
              {selectedFestival === festival ? (
                <p>{festival.description}</p>
              ) : (
                <Button>
                <button onClick={() => handleLearnMoreClick(festival)}>
                  Learn More
                </button>
                </Button>
              )}
            </FestivalInfo>
          </div>
        ))}
      </FestivalContainer>
    </>
  );
};

export default FestivalPage;
