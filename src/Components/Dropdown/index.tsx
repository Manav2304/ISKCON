import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  DropdownMenu,
  DropdownMenuStyle,
  DropdownTitleStyle,
  DropdownToggle,
  TransparentDropdown,
} from "./style";
import { useNavigate } from "react-router-dom";

interface DropdownItem {
  title: string;
  path: string;
}

interface DropdownProps {
  items: DropdownItem[];
  dropdownTitle: string;
}

export const DropDown: React.FC<DropdownProps> = ({ items, dropdownTitle }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <TransparentDropdown>
        <Dropdown show={isHovered}>
          <DropdownTitleStyle>
            <DropdownToggle>{dropdownTitle}</DropdownToggle>
          </DropdownTitleStyle>
          <DropdownMenuStyle>
            <Dropdown.Menu>
              {items.map((item) => (
                <Dropdown.Item
                  key={item.path}
                  onClick={() => handleItemClick(item.path)}
                >
                  {item.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </DropdownMenuStyle>
        </Dropdown>
      </TransparentDropdown>
    </div>
  );
};
