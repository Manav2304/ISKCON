import styled from 'styled-components';

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem; 
`;

export const TextWrapper = styled.div`  
  color: #ad0d0d;
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleImage = styled.img`
  width: 580px;
  height: 80px;
`;

export const Heading = styled.h1`
  font-size: 3rem; 
  text-align: center;
  color: #7e5959;
`;

export const ImageSlide = styled.img`
  width: 600px;
  height: 600px;
  object-fit: auto;
  margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.12rem;
  line-height: 1.5;
  text-align: left;
  text-align: justify;
`;

export const Button = styled.button`
  background-color: #00FFFF;
  color: #0C090A;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;
