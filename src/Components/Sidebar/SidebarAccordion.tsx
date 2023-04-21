import { useState, useEffect, useRef } from "react";
import { AccordionItemButton, AccordionLink, AccordionContainer } from './style';
import { Accordion } from "react-bootstrap";

type AccordionProps = {
  items: { name: string; url: string }[];
  toggleTitle: string;
  isOpen: boolean;
  handleClose: () => void;
};

export const SidebarAccordion = ({
  items,
  toggleTitle,
  handleClose,
  isOpen,
}: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState("-1");
  const accordionRef = useRef<HTMLDivElement>(null); // Fix here

  const handleAccordionChange = (index: number) => {
    setActiveIndex(index === parseInt(activeIndex) ? "-1" : String(index));
  };

  const handleLinkClick = () => {
    handleClose();
  };

  const handleClickOutsideAccordion = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!accordionRef.current?.contains(target)) {
      setActiveIndex("-1");
    }
  };
  
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideAccordion);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAccordion);
    };
  }, []);

  return (
    <Accordion ref={accordionRef} defaultActiveKey={isOpen ? "toggle" : ""}>
      <Accordion.Item eventKey="toggle">
        <AccordionItemButton>
          {toggleTitle}
        </AccordionItemButton>
        <Accordion.Collapse eventKey="toggle">
          <AccordionContainer>
            {items.map((item, index) => (
              <Accordion.Item key={item.name} eventKey={`item-${index}`}>
                <div key={item.name} onClick={() => {
                    handleAccordionChange(index);
                    handleClose();
                  }}>
                  <AccordionLink href={item.url} onClick={handleLinkClick}>
                    {item.name}
                  </AccordionLink>
                </div>
              </Accordion.Item>
            ))}
          </AccordionContainer>
        </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  );
};
