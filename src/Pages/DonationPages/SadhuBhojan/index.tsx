import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import { donationCategories, sadhuBhojan } from "./constant";
import { DonationTableWrapper } from "./style";

export const SadhuBhojan: React.FC = () => {
  return (
    <div>
      <DonationPagesDescription title="Sadhu Seva" content={sadhuBhojan} />
      <DonationTableWrapper>
        <Payment donationCategories={donationCategories} />
      </DonationTableWrapper>
    </div>
  );
};
