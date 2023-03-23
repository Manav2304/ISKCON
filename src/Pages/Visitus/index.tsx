import React ,{ useState } from 'react';
import { dakorImage,goushalaImage,dakorInfo,goushala,titleBase} from './constant';
import { ServiceWrapper,TextWrapper,HeadIng1,ParaGraph,Button ,ImageDiv, TitleImage} from './style';
import Carousel from './carousel';

const VisitUs = () => {
  const [showMoreDakor, setShowMoreDakor] = useState(false);
  const [showMoreGoushala, setShowMoreGoushala] = useState(false)
  const toggleShowMoreDakor = () => setShowMoreDakor(!showMoreDakor);
  const toggleShowMoreGoushala = () => setShowMoreGoushala(!showMoreGoushala);

  return (
       <ServiceWrapper>
        <TextWrapper>
        <HeadIng1>Dakor Dham</HeadIng1>
        <ImageDiv>
         <TitleImage src={titleBase} alt="TitleBase" />
        </ImageDiv>
        <Carousel images={dakorImage} />
        <ParaGraph>
          {dakorInfo.map((paragraph, index) => (
            <p key={index} style={{ display: showMoreDakor || index < 2 ? 'block' : 'none' }}>{paragraph}</p>
          ))}
        </ParaGraph>
        {dakorInfo.length > 2 && (
          <Button onClick={toggleShowMoreDakor}>
            {showMoreDakor ? 'Read less' : 'Read more'}
          </Button>
        )}
        <HeadIng1>Goverdhan Goushala</HeadIng1>
        <ImageDiv>
         <TitleImage src={titleBase} alt="TitleBase" />
        </ImageDiv>
        <Carousel images={goushalaImage} />
        <ParaGraph>
          {goushala.map((paragraph, index) => (
            <p key={index} style={{ display: showMoreGoushala || index < 2 ? 'block' : 'none' }}>{paragraph}</p>
          ))}
        </ParaGraph>
        {goushala.length > 2 && (
          <Button onClick={toggleShowMoreGoushala}>
            {showMoreGoushala ? 'Read less' : 'Read more'}
          </Button>
        )}
       </TextWrapper>
       </ServiceWrapper>  
  );
};

export default VisitUs;
