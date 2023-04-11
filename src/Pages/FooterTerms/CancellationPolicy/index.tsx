import { FooterTerms } from "../../../Components/PageLayout";
import { cancellationPolicy } from "./constant";

export const CancellationPolicy: React.FC = () => {
  return (
    <FooterTerms title="Cancellation Policy" content={cancellationPolicy} />
  );
};
