import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import { eHindu, donationCategories } from "./constant";
import { DonationTableWrapper } from "./style";

export const EHindu: React.FC = () => {
  return (
    <div>
      <DonationPagesDescription title="E hundi" content={eHindu} />
      <DonationTableWrapper>
        <Payment donationCategories={donationCategories} />
      </DonationTableWrapper>
    </div>
  );
};
