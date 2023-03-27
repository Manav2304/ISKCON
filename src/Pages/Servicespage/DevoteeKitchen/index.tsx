import ServiceDiscription from "../PageLayout/index";
import { devoteekitchen } from "./constant";
import Images from "../../../assets/image/devoteekitchen.jpg";

export const DevoteeKitchen: React.FC = () => {
  return (
    <ServiceDiscription
      title="Devotee Kitchen"
      content={devoteekitchen} 
      imageUrl={Images}/>
  );
}