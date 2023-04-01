import ServiceDiscription from "../PageLayout/index";
import { devoteekitchen } from "./constant";
import devoteeKitchenImage from "../../../assets/images/devotee-kitchen.jpg";

export const DevoteeKitchen: React.FC = () => {
  return (
    <ServiceDiscription
      title="Devotee Kitchen"
      content={devoteekitchen} 
      imageUrl={devoteeKitchenImage}/>
  );
}