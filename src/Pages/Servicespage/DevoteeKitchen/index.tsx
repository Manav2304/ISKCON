import ServiceDiscription from "../PageLayout/index";
import { devoteekitchen } from "./constant";
import images from "../../../assets/image/devoteekitchen.jpg";

export const DevoteeKitchen: React.FC = () => {
  return (
    <ServiceDiscription
      title="Devotee Kitchen"
      content={devoteekitchen} 
      imageUrl={images}/>
  );
}