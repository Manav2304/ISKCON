// import React, { useState } from "react";
// import { Card } from "react-bootstrap";
// import { Feedback, Section, SringarDarshanImgs, TitleName1 } from "./style";

// interface Props {
//   photos: { id: number; image: string }[];
//   title: string;
// }

// export const SringarDarshanImg: React.FC<Props> = ({ photos, title }) => {
//   const [noOfElement, setnoOfElement] = useState(4);
//   const loadMore = () => {
//     setnoOfElement(noOfElement + noOfElement);
//   };

//   const slice = photos.slice(0, noOfElement);
//   return (
//     <Section>
//       <SringarDarshanImgs>
//         {slice.map((image) => (
//           <Card key={image.id}>
//             <Feedback src={image.image} alt={`Carousel Image ${image.id}`} />
//           </Card>
//         ))}
//       </SringarDarshanImgs>

//       <TitleName1>{title}</TitleName1>

//       <button onClick={() => loadMore()}> Viewall</button>
//     </Section>
//   );
// };

import { useState } from "react";
import { Heading2, Button, DarshanImage, DarshanInfo, Paragraph1, Description } from "./style";
import { Darshan } from "./types";

interface DarshanCardProps {
  darshan: Darshan;
  // photos: { id: number; image: string }[];
  // title: string;
}

// export const DarshanCard: React.FC = ({ darshan }) => {
export const DarshanCard = ({ darshan }: DarshanCardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };
  // const [noOfElement, setnoOfElement] = useState(4);
  // const loadMore = () => {
  //   setnoOfElement(noOfElement + noOfElement);
  // };
  // const slice = darshan.slice(0, noOfElement);
  return (
    <>
      <div>
        
        <DarshanImage src={darshan.image} className="rounded bordered" />
        {/* {slice.map((darshan: Darshan) => (
          <DarshanCard key={darshan.id} darshan={darshan} />
        ))} */}
        <DarshanInfo>
          <Heading2>
            <h2>{darshan.id}</h2>
          </Heading2>
          {/* <Paragraph1>
          <p>{darshan.date}</p>
        </Paragraph1> */}
        {/* <Description>
          {isSelected
            ? darshan.description
            : `${darshan.description.substring(0, 100)}...`}
        </Description> */}
        </DarshanInfo>
        <Button onClick={toggleSelected}>
        {isSelected ? "Read less" : "Read more"}
      </Button>
        {/* <Button onClick={() => loadMore()}> Viewall</Button> */}
      </div>
    </>
  );
};
