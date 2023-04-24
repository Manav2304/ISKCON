import { useRef } from "react";
import { AccordionContainer, AccordionItemButton, AccordionLink } from "./style";
import { Accordion } from "react-bootstrap";
import styled from "styled-components";

type AccordionProps = {
  items: { name: string; url: string; }[];
  toggleTitle: string;
  handleClose: () => void;
};

type AccordionItemProps = {
  hasBorder: boolean;
};

const StyledAccordionItem = styled(Accordion.Item)<AccordionItemProps>`
  border: ${(props) => (props.hasBorder ? "1px solid rgba(0,0,0,.125)" : "none")};
  background-color: transparent;
`;

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
      <StyledAccordionItem eventKey="toggle" hasBorder={true}>
        <AccordionItemButton ref={accordionToggleRef}>{toggleTitle}</AccordionItemButton>
        <Accordion.Collapse eventKey="toggle">
          <AccordionContainer>
            {items.map((item, index) => (
              <StyledAccordionItem key={item.name} eventKey={`item-${index}`} hasBorder={false}>
                <AccordionLink to={item.url} onClick={handleLinkClick}>
                  {item.name}
                </AccordionLink>
              </StyledAccordionItem>
            ))}
          </AccordionContainer>
        </Accordion.Collapse>
      </StyledAccordionItem>
    </Accordion>
  );
};
