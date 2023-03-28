import ServiceDiscription from "../PageLayout/index";
import { deityWorship } from "./constant";
import deityWorshipImage from "../../../assets/image/deity-worship.jpg";

export const DeityWorship: React.FC = () => {
  return (
    <ServiceDiscription
      title="Deity Worship"
      content={deityWorship}
      imageUrl={deityWorshipImage}
    />
  );
};
