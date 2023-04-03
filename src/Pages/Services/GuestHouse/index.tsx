import { ServiceDiscription } from "../PageLayout/index";
import { guestHouse,guestHouseImage } from "./constant";

export const GuestHouse: React.FC = () => {
  return (
    <ServiceDiscription
      title="Prabhupada Ashrya Guest House"
      content={guestHouse}
      imageUrl={guestHouseImage}
    />
  );
};
