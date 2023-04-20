import { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'; 

type AccordionProps = {
  items: { name: string; url: string; }[];
  toggleTitle: string;
  handleClose: () => void;
};

export const SidebarAccordion = ({ items, toggleTitle }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionChange = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <Accordion allowZeroExpanded>
      <AccordionItem uuid="toggle">
        <AccordionItemButton>{toggleTitle}</AccordionItemButton>
        <AccordionItemPanel>
          {items.map((item, index) => (
            <AccordionItem key={item.name} uuid={`item-${index}`}>
              <AccordionItemButton onClick={() => handleAccordionChange(index)}>
                <Link to={item.url}>{item.name}</Link>
              </AccordionItemButton>
              <AccordionItemPanel>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
