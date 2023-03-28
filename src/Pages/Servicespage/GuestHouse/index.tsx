import ServiceDiscription from "../PageLayout/index";
import { guesthouse } from "./constant";
import images from "../../../assets/image/guesthouse.jpg";

export const GuestHouse: React.FC = () => {
  return (
    <ServiceDiscription
      title="Prabhupada Ashrya Guest House"
      content={guesthouse} 
      imageUrl={images}/>
  );
}