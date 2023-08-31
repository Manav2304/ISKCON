import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import { donationCategories, radharaniKitchenSeva } from "./constant";
import { DonationTableWrapper } from "./style";

export const RadharaniKitchenSeva: React.FC = () => {
  return (
    <div>
      <DonationPagesDescription
        title="Radharani Kitchen Seva"
        content={radharaniKitchenSeva}
      />
      <DonationTableWrapper>
        <Payment donationCategories={donationCategories} />
      </DonationTableWrapper>
    </div>
  );
};
