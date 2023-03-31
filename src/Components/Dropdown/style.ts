import styled from "styled-components";
import { Link } from "react-router-dom";

export const TransparentDropdown = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
`;

export const DropdownTitleStyle = styled.div`
  color: #7e5959;
  background-color: transparent;
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
