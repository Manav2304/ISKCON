import React, { useState } from "react";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../../TitleBase/style";
import titleBaseImg from "../../../assets/images/title-base.png";
// import { FestivalContainer, SringarDarshan, SringarDarshancard } from "./style";
// import data, { SringarTitle, darshan } from "./constant"
import { SringarTitle, darshans } from "./constant";
import { Darshan} from "./types";
import { Button, DarshanContainer, DarshanImage, DarshanInfo, Darshanview, Heading2 } from "./style";
import { DarshanCard } from "./darshancard";

interface DarshanCardProps {
  darshan: Darshan;
  // photos: { id: number; image: string }[];
  // title: string;
}

export const DailyDarshan: React.FC<DarshanCardProps> = ({ }) => {
  const [noOfElement, setnoOfElement] = useState(4);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  // const slice = photos.slice(0, noOfElement);

  return (
    <>
      <TitleWrapper>
        <HeadingStyle>
          <h1>Media two</h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
      </TitleWrapper>
      {/* <CardGroup>
        <SringarDarshan>
          <SringarDarshancard>
            <SringarDarshanImg
              photos={darshan}
              title={SringarTitle}
            ></SringarDarshanImg>
          </SringarDarshancard>
        </SringarDarshan>
      </CardGroup> */}

<DarshanContainer>
        {darshans.map((darshan: Darshan) => (
          <DarshanCard key={darshan.id} darshan={darshan} />
        ))}
        {/* {slice.map((image) => (
          <Darshanview key={image.id} >
            <DarshanImage src={image.image} className="rounded bordered" /> 
            </Darshanview>
        ))} */}
        
        
        <DarshanInfo>
        <Button onClick={() => loadMore()}> Viewall</Button>
          {/* <Heading2>
            <h2>{image.id}</h2>
          </Heading2> */}
          {/* <Paragraph1>
          <p>{festival.date}</p>
        </Paragraph1>
        <Description>
          {isSelected
            ? festival.description
            : `${festival.description.substring(0, 100)}...`}
        </Description> */}
        </DarshanInfo>
      </DarshanContainer>
    </>
  );
};
