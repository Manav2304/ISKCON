import React from 'react';
import {IMAGES} from './constant';
import {dakorInfo} from './constant';
import { ServiceWrapper, ImageSlide, TextWrapper, HeadIng1, ParaGraph} from './style';


const Nearby = () => {
  return (
    <ServiceWrapper>
    <HeadIng1>
       <h1>Dakor Dham </h1>
    </HeadIng1>
    <TextWrapper>
       
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            {IMAGES.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <ImageSlide src={image} className="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    <ParaGraph>
        <p>
     {dakorInfo}
        </p>
    </ParaGraph>
    </TextWrapper>
    </ServiceWrapper>
  );
};

export default Nearby;
