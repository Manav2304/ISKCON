import styled from "styled-components";
export const TextStyle = styled.div`
  text-align: justify;
  margin: 40px 50px 50px;
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 768px) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    margin: 25px;
    font-size: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;
export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding: 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 2rem;
    padding: 40px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 3rem;
    padding: 60px;
  }
`;
export const ImageTitle = styled.img.attrs((props) => ({
  alt: props.alt,
}))`
  width: 100%;
  max-width: 400px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    width: 100%;
    max-width: 300px;
  }

  @media only screen and (min-width: 1200px) {
    width: 100%;
    max-width: 400px;
  }
`;
export const Reviews = styled.div`
  max-width: 1600px;

  @media only screen and (max-width: 767px) {
    margin: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 10px;
  }

  @media only screen and (min-width: 1200px) {
    margin: 5px;
  }
`;
export const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ImageCarousel = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain cover;

  @media only screen and (max-width: 767px) {
    height: 150px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    height: 300px;
  }

  @media only screen and (min-width: 1200px) {
    height: 500px;
    width: 100%;
  }
`;
export const Image = styled.img`
  object-fit: contain;

  @media only screen and (max-width: 767px) {
    height: 85%;
    width: 85%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    height: 88%;
    width: 88%;
  }

  @media only screen and (min-width: 1200px) {
    height: 92%;
    width: 92%;
  }
`;
