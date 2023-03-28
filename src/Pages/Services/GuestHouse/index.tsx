import ServiceDiscription from "../PageLayout/index";
import { guesthouse } from "./constant";
import guestHouseImage from "../../../assets/image/guest-house.jpg";

export const GuestHouse: React.FC = () => {
  return (
    <ServiceDiscription
      title="Prabhupada Ashrya Guest House"
      content={guesthouse} 
      imageUrl={guestHouseImage}/>
  );
}