import { useState } from "react";
import {
  DropdownWrapper,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownArrow
} from "./style";

type DropdownProps = {
  items: Array<{ name: string; url: string }>;
  toggleTitle: string;
  handleClose: () => void;
};

export const SideBarDropdown = ({
  items,
  toggleTitle,
  handleClose,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    handleClose();
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={handleToggle}>{toggleTitle}<DropdownArrow /></DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {items.map((item) => (
            <DropdownItem
              key={item.name}
              onClick={handleItemClick}
              to={item.url} // added the `to` prop here
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};
