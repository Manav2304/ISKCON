import React from 'react';
import { IMAGES } from './constant';
import { dakorInfo } from './constant';
import { ServiceWrapper, TextWrapper, HeadIng1, ParaGraph } from './style';
import Carousel from "./carousel";

const mapDakorInfo = dakorInfo.map((paragraph) => <p>{paragraph}</p>);
const Visitus = () => {
  return (
    <ServiceWrapper>
      <HeadIng1>
       Dakor Dham 
      </HeadIng1>
      <TextWrapper>
        <Carousel images={IMAGES} />
        <ParaGraph>
          <p>
            {mapDakorInfo}
          </p>
        </ParaGraph>
      </TextWrapper>
    </ServiceWrapper>
  );
};

export default Visitus;
