import { useState } from "react";
import { DropdownWrapper, DropdownButton, DropdownMenu, DropdownItem } from "./style";

type DropdownProps = {
  items: Array<{ name: string; url: string }>;
  toggleTitle: string;
  handleClose: () => void;
};

export const SideBarDropdown = ({ items, toggleTitle }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={handleToggle}>{toggleTitle}</DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {items.map((item) => (
            <DropdownItem key={item.name} onClick={handleItemClick} to={item.url}>
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};
