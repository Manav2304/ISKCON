import { FooterTerms } from "../../../Components/PageLayout";
import { privacyPolicy } from "./constant";

export const PrivacyPolicy: React.FC = () => {
  return <FooterTerms title="Privacy Policy" content={privacyPolicy} />;
};
