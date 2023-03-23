import styled from "styled-components";
import { CAROUSEL_WIDTH, CAROUSEL_HEIGHT } from "./constant";

export const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const CarouselWrapper = styled.div`
  width: ${CAROUSEL_WIDTH};
  height: ${CAROUSEL_HEIGHT};
  margin: 50px;
  padding: 20px; 
`;

export const ImageSlide = styled.img`
  width: 500px;
  height: 300px;
  object-fit: auto;
`;

