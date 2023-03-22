import React from 'react';
import {  IMAGES1,IMAGES2 } from './constant';
import { dakorInfo ,goushala} from './constant';
import { ServiceWrapper, TextWrapper, HeadIng1, ParaGraph } from './style';
import Carousel from "./carousel";

const mapDakorInfo = dakorInfo.map((paragraph) => <p>{paragraph}</p>);
const mapGoushala = goushala.map((paragraph) => <p>{paragraph}</p>);


const Visitus = () => {
  return (
    <ServiceWrapper>
      <HeadIng1>
       Dakor Dham 
      </HeadIng1>
      <TextWrapper>
        <Carousel images={IMAGES1} />
        <ParaGraph>
          <p>
            {mapDakorInfo}
          </p>
        </ParaGraph>
        </TextWrapper>
        <TextWrapper>
        <HeadIng1>
        Goverdhan Goushala 
        </HeadIng1>
        <Carousel images={IMAGES2} />
        <ParaGraph>
          <p>
            {mapGoushala}
          </p>
        </ParaGraph>
      </TextWrapper>
    </ServiceWrapper>
  );
};

export default Visitus;
