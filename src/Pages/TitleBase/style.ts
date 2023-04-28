import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin-top: 80px;
`;

export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    font-size: 1.5rem;
    padding: 40px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
    padding: 50px;
  }
`;

export const ImageTitle = styled.img`
  width: 100%;
  max-width: 400px;

  @media only screen and (max-width: 768px) {
    width: 80%;
    max-width: 500px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1199px) {
    width: 70%;
    max-width: 300px;
  }

  @media only screen and (min-width: 1200px) {
    width: 100%;
    max-width: 400px;
  }
`;
