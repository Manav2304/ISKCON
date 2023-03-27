import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TransparentDropdown = styled(Dropdown)`
  border: none;

  .dropdown-menu {
    background-color: #7e5959;
  }
  .dropdown-item {
    color: white;
  }
`;
export const StyledLink = styled(Link)`
  color: red;
`;
