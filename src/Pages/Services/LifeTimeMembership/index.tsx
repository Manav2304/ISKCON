import { ServiceDescription } from "../PageLayout/index";
import { lifeTimeMembership } from "./constant";

export const LifeTimeMembership: React.FC = () => {
  return (
    <ServiceDescription
      title="Life Time Membership"
      content={lifeTimeMembership} 
      imageUrl={[]}      
    />
  );
};
