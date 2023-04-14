import styled from "styled-components";

export const FestivalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 80px;
  margin: 20px auto;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 40px;
    margin: 20px;
  }
`;

export const FestivalImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 350px;
    height: 250px;
  }

  @media (min-width: 992px) {
    width: 450px;
    height: 300px;
  }
`;

export const FestivalInfo = styled.div`
  background-color: transparent;
  padding: 10px;
  text-align: center;
`;

export const Heading2 = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #7e5959;
`;

export const Paragraph1 = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #7e5959;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #7e5959;
  margin: 10px;
`;

export const Button = styled.button`
  background-color: #7e5959;
  color: #0c090a;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;
export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  text-align: center;
  margin-top: 110px;

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
export const ImageTitle = styled.img`
  width: 100%;
  max-width: 400px;

  @media only screen and (max-width: 768px) {
    width: 70%;
    max-width: 200px;
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
