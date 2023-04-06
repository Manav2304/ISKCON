import styled from "styled-components";
import { Link } from "react-router-dom";

export const TransparentDropdown = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
  .dropdown-menu {
    border: none;
    box-shadow: none;
    background-color: white;
  }

  .dropdown-toggle {
    color: red;
    background: transparent;
    border: none;
    padding: 0;
  }

  .dropdown-item {
    color: #212529;
    padding: 0.25rem 1.5rem;
    font-size: 1rem;
  }
`;

export const DropdownToggleStyle = styled.div`
  color: #7e5959;
  background-color: transparent;
`;

export const DropdownMenuStyle = styled.div`
  background-color: #7e5959;
`;

export const DropdownItemStyle = styled.div`
  color: white;
`;

export const StyledLink = styled(Link)`
  color: red;
`;
