import styled from "styled-components";

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

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    .card-img-top {
      height: 30vh;
    }
  }

  @media only screen and (min-width: 1200px) {
    .card-img-top {
      height: 40vh;
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
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;

export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  padding: 60px;
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

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
`;
