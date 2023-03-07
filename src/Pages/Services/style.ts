import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ;
`;

export const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fd2759;
`;

export const ServicesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #fc9e39;
  }
`;

export const ServiceImage = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
`;

export const ServiceName = styled.h2`
  align-items: center;
  font-size: 1.5rem;
  margin: 0;
`;

export const ServiceDetails = styled.div`
  align-items: center;
  margin-top: 2rem;
`;

export const ServiceDescription = styled.p`
  align-items: center;
  font-size: 1.2rem;
`;

export const SelectedServiceImage = styled.img`
  align-items: center;
  width: 75%;
  height: 50%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
