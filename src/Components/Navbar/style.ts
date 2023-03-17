import styled from "styled-components";

export const NavStyle = styled.div`

  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
 
    img {
      margin-right: 0.5rem;
      width: 20vh;
      height: 12vh;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;

    gap: 1rem;

    .nav-link {
      color: #fc9e39;
      font-weight: 500;
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #fc9e39;
        color: #fff;
      }
    }
  }
`;
