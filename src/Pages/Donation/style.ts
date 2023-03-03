import styled from "styled-components";

export const DonationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 50%;
`;

export const InputLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const PageBackground = styled.div`
  .manav {
    margin: 50px;
    color: white;
    border-radius: 5px;
    background-image: url(" https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=600 ");
  }
`;
