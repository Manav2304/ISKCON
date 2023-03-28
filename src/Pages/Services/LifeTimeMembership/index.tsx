import ServiceDiscription from "../PageLayout/index";
import { lifetimemembership } from "./constant";
import lifeTimeMembershipImage from "../../../assets/image/life-time-membership.jpg";

export const LifeTimeMembership: React.FC = () => {
  return (
    <ServiceDiscription
      title="Life Time Membership"
      content={lifetimemembership} 
      imageUrl={lifeTimeMembershipImage}/>
  );
}