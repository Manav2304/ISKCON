import ServiceDiscription from "../PageLayout/index";
import { gaushala } from "./constant";
import images from "../../../assets/image/gaushala.jpg";

export const Gaushala: React.FC = () => {
  return (
    <ServiceDiscription
      title="Goverdhan Gaushala"
      content={gaushala} 
      imageUrl={images}/>
  );
}