import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import {eHindu , donationCategories } from "./constant";

export const EHindu: React.FC = () => {
  return (
<div>
  <DonationPagesDescription title="Anna Daan" content={eHindu} />
  <Payment donationCategories={donationCategories} />
  </div>
);
};
