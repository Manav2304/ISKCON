import { ServiceDiscription } from "../PageLayout/index";
import { deityWorship,deityWorshipImage  } from "./constant";

export const DeityWorship: React.FC = () => {
  return (
    <ServiceDiscription
      title="Deity Worship"
      content={deityWorship}
      imageUrl={deityWorshipImage}
    />
  );
};
