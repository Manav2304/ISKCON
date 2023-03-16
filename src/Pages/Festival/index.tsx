import { festivals } from "./constant";
import { FestivalContainer, FestivalImage, FestivalInfo } from "./style";

const FestivalPage = () => {
  return (
    <>
     <h1>Festival</h1>
    <FestivalContainer>
      {festivals.map((festival) => (
        <div key={festival.name}>
          <FestivalImage src={festival.image} />
          <FestivalInfo>
            <h2>{festival.name}</h2>
            <p>{festival.date}</p>
            <p>{festival.description}</p>
          </FestivalInfo>
        </div>
      ))}
    </FestivalContainer></>
  );
};

export default FestivalPage;