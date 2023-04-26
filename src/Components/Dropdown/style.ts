import styled from "styled-components";

export const TransparentDropdown = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;

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
    color: #212529;
    padding: 0.4rem 0.5rem;
    font-size: 1rem;
  }
`;
export const DropdownToggleWrapper = styled.div`
  color: #7e5959;
  background-color: transparent;
`;
export const DropdownMenuWrapper = styled.div`
  background-color: #7e5959;
`;
