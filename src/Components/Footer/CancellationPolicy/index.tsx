import { FooterTerms } from "../PageLayout/index";
import { cancellationPolicy } from "./constant";

export const CancellationPolicy: React.FC = () => {
  return (
    <FooterTerms title="Cancellation Policy" content={cancellationPolicy} />
  );
};
