import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'; 
import { StyledLink } from "./style";

type AccordionProps = {
  items: { name: string; url: string; }[];
  toggleTitle: string;
  handleClose: () => void;
};
export const SidebarAccordion = ({ items, toggleTitle, handleClose }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionChange = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <Accordion allowZeroExpanded>
      <AccordionItem uuid="toggle">
        <AccordionItemButton>{toggleTitle}</AccordionItemButton>
        <AccordionItemPanel>
          {items.map((item, index) => (
            <AccordionItem key={item.name} uuid={`item-${index}`}>
              <AccordionItemButton onClick={() => handleAccordionChange(index)}>
                <StyledLink to={item.url} onClick={handleLinkClick}>
                  {item.name}
                </StyledLink>
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
