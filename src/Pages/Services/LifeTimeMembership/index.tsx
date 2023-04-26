import { ServiceDescription } from "../PageLayout/index";
import { lifeTimeMembership, lifeTimeMembershipImages, contactDetailes } from "./constant";

export const LifeTimeMembership: React.FC = () => {
  return (
    <ServiceDescription
      title="Life Time Membership"
      content={lifeTimeMembership}
      imageUrl={lifeTimeMembershipImages}
      contactNumber1={contactDetailes} 
      contactNumber2={[]} emailId={[]}    />
  );
};
