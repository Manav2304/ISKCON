import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownTitleStyle = styled.div`
  color: #7e5959;
  background: transparent;
`;

export const DropdownMenuStyle = styled.div`
  background-color: #7e5959;
`;

export const DropdownItemStyle = styled.div`
  color: #ffffff;
`;

export const StyledLink = styled(Link)`
  color: #ff0000;
`;
export const TransparentDropdown = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
`;

export const DropdownMenu = styled.div`
  border: none;
  box-shadow: none;
  background-color: #ffffff;
`;

export const DropdownToggle = styled.div`
  color: red;
  background: transparent;
  border: none;
  padding: 0;
`;
