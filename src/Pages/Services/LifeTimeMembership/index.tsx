import { ServiceDiscription } from "../PageLayout/index";
import { lifeTimeMembership } from "./constant";

export const LifeTimeMembership: React.FC = () => {
  return (
    <ServiceDiscription
      title="Life Time Membership"
      content={lifeTimeMembership} 
      imageUrl={[]}      
    />
  );
};
