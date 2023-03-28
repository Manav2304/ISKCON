import React from "react";
import { Dropdown } from "react-bootstrap";
import {
  DropdownMenuStyle,
  DropdownToggleStyle,
  TransparentDropdown,
} from "./style";
import { dropdownItems } from "./constant";
export const DropDown: React.FC = () => {
  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (href) {
      window.location.href = href;
    }
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
                <Dropdown.Item onClick={handleItemClick} href={item.href}>
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
