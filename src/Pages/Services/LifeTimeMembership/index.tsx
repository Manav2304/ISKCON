import { ServiceDescription } from "../PageLayout/index";
import { lifeTimeMembership, lifeTimeMembershipImages } from "./constant";

export const LifeTimeMembership: React.FC = () => {
  return (
    <ServiceDescription
      title="Life Time Membership"
      content={lifeTimeMembership}
      imageUrl={lifeTimeMembershipImages}
    />
  );
};
