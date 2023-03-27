import React from "react";
import { Dropdown } from "react-bootstrap";
import { TransparentDropdown } from "./style";
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
          <Dropdown.Toggle>ISKCON</Dropdown.Toggle>

          <Dropdown.Menu>
            {Dropdownitems.map((item) => (
              <Dropdown.Item onClick={handleItemClick} href={item.href}>
                {item.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </TransparentDropdown>
    </div>
  );
};
