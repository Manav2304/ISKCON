import { useState } from "react";
import {
  AccordionStyle,
  StyledLink,
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  BorderStyle,
} from "./style";
import "react-accessible-accordion/dist/fancy-example.css";

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
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionChange = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <Accordion allowZeroExpanded={true} preExpanded={isOpen ? ["toggle"] : []}>
      <AccordionItem uuid="toggle">
        <AccordionStyle>
          <AccordionItemButton className="custom-accordion-button">
            {toggleTitle}
          </AccordionItemButton>
        </AccordionStyle>
        <AccordionItemPanel>
          {items.map((item, index) => (
            <AccordionItem key={item.name} uuid={`item-${index}`}>
              <BorderStyle
                className="custom-accordion-button"
                onClick={() => {
                  handleAccordionChange(index);
                  handleClose();
                }}
              >
                <StyledLink to={item.url} onClick={handleLinkClick}>
                  {item.name}
                </StyledLink>
              </BorderStyle>
            </AccordionItem>
          ))}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
