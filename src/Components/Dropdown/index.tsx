import React from "react";
import { Dropdown } from "react-bootstrap";
import {
  DropdownMenuStyle,
  DropdownToggleStyle,
  TransparentDropdown,
} from "./style";
import { dropdownItems } from "./constant";
import { useNavigate } from "react-router-dom";

export const DropDown: React.FC = () => {
  const navigate = useNavigate();

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <TransparentDropdown>
        <Dropdown>
          <DropdownToggleStyle>
            <Dropdown.Toggle>ISKCON</Dropdown.Toggle>
          </DropdownToggleStyle>
          <DropdownMenuStyle>
            <Dropdown.Menu>
              {dropdownItems.map((item) => (
                <Dropdown.Item onClick={() => handleItemClick(item.path)}>
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
