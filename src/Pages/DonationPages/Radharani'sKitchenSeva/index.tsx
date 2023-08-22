import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import { donationCategories, radharaniKitchenSeva} from "./constant";

export const RadharaniKitchenSeva: React.FC = () => {
  return (
<div>
  <DonationPagesDescription title="Radharani Kitchen Seva" content={radharaniKitchenSeva} />
  <Payment donationCategories={donationCategories} />
  </div>
);
};
