import React from 'react';
//import { IMAGES } from './constant';
import { paragraph1, paragraph2 } from './constant';
import { HeadStyle, ParagraphStyle, ServiceWrapper, TextWrapper } from './style';


export const LifeTimeMembership = () => {
    return (
        <ServiceWrapper>
            <HeadStyle></HeadStyle><h1>Life Time Membership </h1><HeadStyle />
            <TextWrapper>

                {/*  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
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
                </div> */}
                <ParagraphStyle>
                    <p>
                        {[

                            paragraph1, paragraph2,

                        ].map((paragraph, index) => (
                            <React.Fragment key={index}>
                                {paragraph}
                                <br /><br />
                            </React.Fragment>
                        ))}
                    </p>
                </ParagraphStyle>

            </TextWrapper>
        </ServiceWrapper>
    );
};
