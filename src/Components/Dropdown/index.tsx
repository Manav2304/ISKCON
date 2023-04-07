import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenuWrapper,
  DropdownToggleWrapper,
  TransparentDropdown,
} from "./style";

interface DropdownItem {
  title: string;
  path: string;
}

interface DropdownProps {
  items: DropdownItem[];
  toggleTitle: string;
}

export const PageDropdown: React.FC<DropdownProps> = ({
  items,
  toggleTitle,
}) => {
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
          <DropdownToggleWrapper>
            <Dropdown.Toggle>{toggleTitle}</Dropdown.Toggle>
          </DropdownToggleWrapper>
          <DropdownMenuWrapper>
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
          </DropdownMenuWrapper>
        </Dropdown>
      </TransparentDropdown>
    </div>
  );
};
