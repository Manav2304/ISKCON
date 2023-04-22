import { useRef } from "react";
import { AccordionContainer, AccordionItemButton, AccordionLink } from "./style";
import { Accordion } from "react-bootstrap";

type AccordionProps = {
  items: { name: string; url: string; }[];
  toggleTitle: string;
  handleClose: () => void;
};

export const SidebarAccordion = ({ items, toggleTitle, handleClose, isOpen, setIsOpen }: AccordionProps & { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; }) => {
  const accordionToggleRef = useRef<HTMLButtonElement>(null);

  const handleLinkClick = () => {
    handleClose();
    setIsOpen(false);
    accordionToggleRef.current?.click(); 
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion defaultActiveKey={""} activeKey={isOpen ? "toggle" : ""} onSelect={handleClick}>
      <Accordion.Item eventKey="toggle">
        <AccordionItemButton ref={accordionToggleRef}>{toggleTitle}</AccordionItemButton>
        <Accordion.Collapse eventKey="toggle">
          <AccordionContainer>
            {items.map((item, index) => (
              <Accordion.Item key={item.name} eventKey={`item-${index}`}>
                <AccordionLink to={item.url} onClick={handleLinkClick}>
                  {item.name}
                </AccordionLink>
              </Accordion.Item>
            ))}
          </AccordionContainer>
        </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  );
};
