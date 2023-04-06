import { FooterTerms } from "../PageLayout/index";
import { termsAndCondition } from "./constant";

export const TermsAndCondition: React.FC = () => {
  return (
    <FooterTerms title="Terms And Condition" content={termsAndCondition} />
  );
};
