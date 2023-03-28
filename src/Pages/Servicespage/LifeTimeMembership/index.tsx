import ServiceDiscription from "../PageLayout/index";
import { lifetimemembership } from "./constant";
import images from "../../../assets/image/lifetimemembership.jpg";

export const LifeTimeMembership: React.FC = () => {
  return (
    <ServiceDiscription
      title="Life Time Membership"
      content={lifetimemembership} 
      imageUrl={images}/>
  );
}