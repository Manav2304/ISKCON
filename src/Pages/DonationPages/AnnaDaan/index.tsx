import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import { annaDaan, donationCategories } from "./constant";

export const AnnaDaan: React.FC = () => {
  return (
<div>
  <DonationPagesDescription title="Anna Daan" content={annaDaan} />
  <Payment donationCategories={donationCategories} />
  </div>
);
};
