import styled from 'styled-components';

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #17202A;
  padding: 1rem; 
`;

export const HeadIng1 = styled.h1`
  font-size: 3rem; 
  text-align: center;
`;

export const ImageSlide = styled.img`
  width: 600px;
  height: 600px;
  object-fit: auto;
  margin-bottom: 2rem;
`;

export const TextWrapper = styled.div`
  width: 1024px;
  color: #17202A;
`;

export const ParaGraph = styled.p`
  font-size: 1.12rem;
  line-height: 1.5;
  text-align: left;
  text-align: justify;
`;

export const Button = styled.button`
  background-color: #2196f3;
  color: white;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  
  &:hover {
    background-color: #0d8bf5;
  }
  
  &:active {
    background-color: #0b6abf;
  }
`;
