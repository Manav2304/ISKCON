import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  margin-top: 20px;
  color: #7e5959;
  font-family: "Times New Roman", Times, serif;

  @media screen and (max-width: 768px) {
    font-size: 24px; /* mobile view */
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 32px; /* tablet view */
  }

  @media screen and (min-width: 1024px) {
    font-size: 48px; /* desktop view */
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleImage = styled.img`
  width: 450px;
  height: auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CarouselWrapper = styled.div`
  width: 500px;
  height: 300px;
  margin: 40px 60px;

  @media only screen and (max-width: 767px) {
    /* Mobile view */
    margin: 20px;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    /* Tablet view */
    margin: 30px;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1024px) {
    /* Desktop view */
    margin: 40px 60px;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const TitleName = styled.h2`
  color: #7e5959;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  margin-top: 20px;
`;

export const YouTubeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 60px;

  @media only screen and (max-width: 767px) {
    /* Mobile view */
    margin: 20px;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    /* Tablet view */
    margin: 30px;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1024px) {
    /* Desktop view */
    margin: 40px 60px;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ImageSlide = styled.img`
  width: 500px;
  height: 300px;
  object-fit: auto;

  @media only screen and (max-width: 768px) {
    /* Mobile view */
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    /* Tablet view */
    width: 60%;
  }
`;

export const LinkName = styled.h1`
  color: #ad0d0d;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  margin-top: 20px;
  margin-bottom: 20px;
`;
