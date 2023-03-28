import styled from "styled-components";
export const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
`;

export const TextStyle = styled.div`
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 767px) {
    margin: 10px;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 575px) {
    margin: 10px;
    font-size: 0.7rem;
  }
`;

export const HeadingStyle = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: #7e5959;
  padding: 60px;
  text-align: center;
  margin: 40px;

  @media only screen and (max-width: 767px) {
    font-size: 1.5rem;
    padding: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 2rem;
    padding: 40px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 3rem;
    padding: 60px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 1.2rem;
    padding: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;

  @media only screen and (max-width: 575px) {
    max-width: 200px;
  }
`;
