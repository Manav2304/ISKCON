import { FooterTerms } from "../../../Components/PageLayout";
import { termsAndCondition } from "./constant";

export const TermsAndCondition: React.FC = () => {
  return (
    <FooterTerms title="Terms And Condition" content={termsAndCondition} />
  );
};
