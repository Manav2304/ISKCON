import ServiceDiscription from "../PageLayout/index";
import { lifeTimeMembership } from "./constant";
import lifeTimeMembershipImage from "../../../assets/image/life-time-membership.jpg";

export const LifeTimeMembership: React.FC = () => {
  return (
    <ServiceDiscription
      title="Life Time Membership"
      content={lifeTimeMembership}
      imageUrl={lifeTimeMembershipImage}
    />
  );
};
