import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import {  donationCategories, givesrimadbhagavatam } from "./constant";

export const GiveShrimadBhagavatam: React.FC = () => {
  return (
<div>
  <DonationPagesDescription title="Srimad Bhagavatam" content={givesrimadbhagavatam} />
  <Payment donationCategories={donationCategories} />
  </div>
);
};
