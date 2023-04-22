import { AccordionContainer, AccordionItemButton, AccordionLink } from "./style";
import { Accordion } from "react-bootstrap";

type AccordionProps = {
  items: { name: string; url: string; }[];
  toggleTitle: string;
  handleClose: () => void;
};

export const SidebarAccordion = ({ items, toggleTitle, handleClose }: AccordionProps) => {

  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <Accordion defaultActiveKey={""}>
      <Accordion.Item eventKey="toggle">
        <AccordionItemButton>{toggleTitle}</AccordionItemButton>
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
