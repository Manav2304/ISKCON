import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const TransparentDropdown = styled(Dropdown)`
  border: none;

  .dropdown-toggle {
    color: #7e5959;
    background-color: transparent;
  }

  .dropdown-menu {
    background-color: #7e5959;
  }

  .dropdown-item {
    color: white;
  }
`;
