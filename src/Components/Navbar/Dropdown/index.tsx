import React from "react";
import { Dropdown } from "react-bootstrap";
import { TransparentDropdown } from "../style";
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
            <Dropdown.Item onClick={handleItemClick} href="/history">
              History
            </Dropdown.Item>
            <Dropdown.Item onClick={handleItemClick} href="/Founder">
              Founder
            </Dropdown.Item>
            <Dropdown.Item onClick={handleItemClick} href="/Philosophy">
              Philosophy
            </Dropdown.Item>
            <Dropdown.Item onClick={handleItemClick} href="/Goals">
              Goals
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </TransparentDropdown>
    </div>
  );
};
