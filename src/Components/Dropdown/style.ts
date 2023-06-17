import styled from "styled-components";

export const TransparentDropdown = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
  width: 95px;

  .dropdown-menu {
    border: none;
    box-shadow: none;
    background-color: #fffaf0;
  }

  .dropdown-toggle {
    color: #fff;
    background: transparent;
    border: none;
  }

  .dropdown-item {
    color: #7e5959;
    padding: 0.25rem 1.5rem;
    font-size: 1.2rem;
  }
`;

export const DropdownToggleWrapper = styled.div`
  color: #7e5959;
  background-color: transparent;
  font-family: Overlock-Regular, Arial, Helvetica, sans-serif;
`;

export const DropdownMenuWrapper = styled.div`
  background-color: #7e5959;
  font-family: Overlock-Regular, Arial, Helvetica, sans-serif;
`;
