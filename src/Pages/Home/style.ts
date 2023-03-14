import styled from "styled-components";

export const StyledCarousel = styled.div`
  .carousel-item {
    height: 500px;
    width: 100%;
  }

  .carousel-caption {
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .carousel-caption h5 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-shadow: 2px 2px #000;
  }

  .carousel-caption p {
    font-size: 1.2rem;
    text-shadow: 1px 1px #000;
  }
`;

export const AboutUsText = styled.div`
  .m1 {
    margin: 0px 0px 50px;
    cursor: auto;
    color: black;
    text-align: justify;
    padding: 50px;
    font-family: Arial, sans-serif;
    line-height: 1.7;
    width: 100%;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  a {
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #333;
  }

  /* media query for screens smaller than 768px */
  @media (max-width: 767px) {
    .container {
      font-size: 0.9rem;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1.25rem;
    }
  }

  /* media query for screens larger than 768px */
  @media (min-width: 768px) {
    .container {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;
    }

    p {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
    }

    a {
      font-weight: bold;
      border-bottom: none;
    }
  }
`;
