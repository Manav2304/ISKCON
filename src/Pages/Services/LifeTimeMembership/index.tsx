import { ServiceDiscription } from "../PageLayout/index";
import { lifeTimeMembership } from "./constant";
import lifeTimeMembershipImage from "../../../assets/images/lifeTimeMembership.jpg";

export const LifeTimeMembership: React.FC = () => {
  return (
    <ServiceDiscription
      title="Life Time Membership"
      content={lifeTimeMembership}
      imageUrl={lifeTimeMembershipImage}
    />
  );
};
