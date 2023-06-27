import { ServiceDescription } from "../PageLayout/index";
import { guestHouse, guestHouseImages, contactDetails } from "./constant";

export const GuestHouse: React.FC = () => {
  return (
    <ServiceDescription
      title="Guest House"
      content={guestHouse}
      imageUrl={guestHouseImages}
      contactNumber={contactDetails}    />
  );
};
