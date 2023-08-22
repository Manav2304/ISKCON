import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import { donationCategories, sadhuBhojan} from "./constant";

export const SadhuBhojan: React.FC = () => {
  return (
<div>
  <DonationPagesDescription title="Sadhu Seva" content={sadhuBhojan} />
  <Payment donationCategories={donationCategories} />
  </div>
);
};
