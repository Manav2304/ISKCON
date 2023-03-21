import React from "react";
import { Dropdown } from "react-bootstrap";

export const DropDown: React.FC = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          ISKCON
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/Pages/dropdowninfo">History</Dropdown.Item>
          <Dropdown.Item href="/Pages/Servicespage/IskconYouthForum">
            Iskcon Youth Forum - IYF
          </Dropdown.Item>
          <Dropdown.Item href="/Pages/Servicespage/GuestHouse">
            Prabhupada Ashrya Guest House
          </Dropdown.Item>
          <Dropdown.Item href="/Pages/Servicespage/Gaushala">
            Goverdhan Gaushala
          </Dropdown.Item>
          <Dropdown.Item href="/Pages/Servicespage/DeityWorship">
            Deity Worship
          </Dropdown.Item>
          <Dropdown.Item href="/Pages/Servicespage/DevoteeKitchen">
            Devotee Kitchen
          </Dropdown.Item>
          <Dropdown.Item href="/Pages/Servicespage/KirtanAtIskcon">
            Kirtan At Iskcon
          </Dropdown.Item>
          <Dropdown.Item href="/Pages/Servicespage/BookDistribution">
            Book Distribution
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
