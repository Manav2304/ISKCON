import { ServiceDescription } from "../PageLayout/index";
import { guestHouse, guestHouseImages } from "./constant";

export const GuestHouse: React.FC = () => {
  return (
    <ServiceDescription
      title="Guest House"
      content={guestHouse}
      imageUrl={guestHouseImages}
    />
  );
};
