import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import { donationCategories, janmashtmiSeva } from "./constant";
import { DonationTableWrapper } from "./style";

export const JanmashtmiSeva: React.FC = () => {
  return (
    <div>
      <DonationPagesDescription
        title="Janmashtmi Seva"
        content={janmashtmiSeva}
      />
      <DonationTableWrapper>
        <Payment donationCategories={donationCategories} />
      </DonationTableWrapper>
    </div>
  );
};
