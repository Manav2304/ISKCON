import React from 'react';
import { IMAGES} from './constant';
import { paragraph1,paragraph2,paragraph3,paragraph4,paragraph5,paragraph6 } from './constant';
import { ServiceWrapper, ImageSlide, TextWrapper} from './style';


const Nearby = () => {
  return (
    <ServiceWrapper>
      <h1>Dakor Dham </h1>
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

        <p>
  {[

    paragraph1,paragraph2,paragraph3,paragraph4,paragraph5,paragraph6,

  ].map((paragraph, index) => (
    <React.Fragment key={index}>
      {paragraph}
      <br /><br/>
    </React.Fragment>
  ))}
        </p>


    </TextWrapper>
    </ServiceWrapper>
  );
};

export default Nearby;
