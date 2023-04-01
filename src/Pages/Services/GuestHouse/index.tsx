import { ServiceDiscription } from "../PageLayout/index";
import { guestHouse } from "./constant";
import guestHouseImage from "../../../assets/images/guest-house.jpg";

export const GuestHouse: React.FC = () => {
  return (
    <ServiceDiscription
      title="Prabhupada Ashrya Guest House"
      content={guestHouse}
      imageUrl={guestHouseImage}
    />
  );
};
