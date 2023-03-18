import styled from "styled-components";

export const StyledCarousel = styled.div`
  .carousel-item {
    height: 570px;
  }

  .carousel-caption {
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    color: #fff;
  }

  .carousel-caption h5 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .carousel-caption p {
    font-size: 1.2rem;
  }
`;

export const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;

  @media only screen and (max-width: 768px) {
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

export const TextStyle = styled.div`
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
  // color: #fc9e39;
  font-family: "Times New Roman", Times, serif;
  @media only screen and (max-width: 768px) {
    margin: 10px;
  }
`;

export const HeadingStyle = styled.div`
  text-align: center;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
