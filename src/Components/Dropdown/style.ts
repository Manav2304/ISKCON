import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TransparentDropdown = styled(Dropdown)`
  border: none;
`;
export const StyledLink = styled(Link)`
  color: red;
`;
export const DropdownToggleStyle = styled.div`
   {
    color: #7e5959;
    background-color: transparent;
  }
`;
export const DropdownMenuStyle = styled.div`
  background-color: #7e5959;
`;
export const DropdownItemStyle = styled.div`
  color: white;
`;
