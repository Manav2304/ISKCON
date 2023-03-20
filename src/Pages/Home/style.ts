import styled from "styled-components";

export const StyledCarousel = styled.div`
  margin-top: 69px;
  margin-bottom: 50px;
  .d-block {
    margin-top: 80px;
  }
`;

export const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;

  .card-img-top {
    height: 50vh;
  }
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
  margin-bottom: 50px;
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;
  @media only screen and (max-width: 768px) {
    margin: 10px;
  }
`;

export const HeadingStyle = styled.div`
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  .image {
    margin-top: 0px;
  }
  padding: 60px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const Image = styled.img`
  width: 100%;
  max-width: 300px;
`;
