import React from "react";
import { Dropdown } from "react-bootstrap";
import {
  DropdownmenuStyle,
  DropdowntoggleStyle,
  TransparentDropdown,
} from "./style";
import { Dropdownitems } from "./constant";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
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
          <DropdowntoggleStyle>
            <Dropdown.Toggle>ISKCON</Dropdown.Toggle>
          </DropdowntoggleStyle>
          <DropdownmenuStyle>
            <Dropdown.Menu>
              {Dropdownitems.map((item) => (
                <Dropdown.Item onClick={handleItemClick} href={item.href}>
                  {item.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </DropdownmenuStyle>
        </Dropdown>
      </TransparentDropdown>
    </div>
  );
};
