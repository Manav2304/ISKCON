import { ServiceDescription } from "../PageLayout/index";
import {
  lifeTimeMembership,
  lifeTimeMembershipImages,
  contactDetails,
} from "./constant";

export const LifeTimeMembership: React.FC = () => {
  return (
    <ServiceDescription
      title="Life Membership"
      content={lifeTimeMembership}
      imageUrl={lifeTimeMembershipImages}
      contactNumber={contactDetails}
    />
  );
};
