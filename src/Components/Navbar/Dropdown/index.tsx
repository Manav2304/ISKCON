import React from "react";
import { Dropdown } from "react-bootstrap";

export const DropDown: React.FC = () => {
  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          ISKCON
        </Dropdown.Toggle>
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
    </div>
  );
};
