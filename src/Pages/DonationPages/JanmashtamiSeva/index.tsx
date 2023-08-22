import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import { donationCategories, janmashtmiSeva } from "./constant";

export const JanmashtmiSeva: React.FC = () => {
  return (
<div>
  <DonationPagesDescription title="Janmashtmi Seva" content={janmashtmiSeva} />
  <Payment donationCategories={donationCategories} />
  </div>
);
};
