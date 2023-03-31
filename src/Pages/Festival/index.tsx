import { festivals } from "./constant";
import { FestivalCard } from "./FestivalCard";
import { FestivalContainer, Heading1, ImageDiv, TitleImage } from "./style";
import { Festival } from "./types";
import titleBaseUrl from "../../assets/image/titleBaseUrl.png";

export const FestivalPage = () => {
  return (
    <>
      <Heading1>
        <h1>Festival</h1>
      </Heading1>
      <ImageDiv>
        <TitleImage src={titleBaseUrl} alt="titleBaseImg" />
      </ImageDiv>
      <FestivalContainer>
        {festivals.map((festival: Festival) => (
          <FestivalCard key={festival.name} festival={festival} />
        ))}
      </FestivalContainer>
    </>
  );
};




