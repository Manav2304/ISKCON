import ServiceDiscription from "../PageLayout/index";
import { deityworship } from "./constant";
import deityWorshipImage from "../../../assets/images/deity-worship.jpg";

export const DeityWorship: React.FC = () => {
  return (
    <ServiceDiscription
      title="Deity Worship"
      content={deityworship}
      imageUrl={deityWorshipImage}/>
  );
}