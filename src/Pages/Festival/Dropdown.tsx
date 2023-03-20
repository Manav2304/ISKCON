import React from "react";
import { Dropdown } from "react-bootstrap";

const FestivalDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Festival
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="">Janmashtami</Dropdown.Item>
        <Dropdown.Item href="">Rath Yatra</Dropdown.Item>
        <Dropdown.Item href="">Holi</Dropdown.Item>
        <Dropdown.Item href="">Radhasthami</Dropdown.Item>
        <Dropdown.Item href="">Govardhan puja</Dropdown.Item>
        <Dropdown.Item href="">Kartik Dipawali</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FestivalDropdown;
