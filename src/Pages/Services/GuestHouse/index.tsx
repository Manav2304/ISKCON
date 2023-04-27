import { ServiceDescription } from "../PageLayout/index";
import { guestHouse, guestHouseImages, contactDetails1, contactDetails2 } from "./constant";

export const GuestHouse: React.FC = () => {
  return (
    <ServiceDescription
      title="Guest House"
      content={guestHouse}
      imageUrl={guestHouseImages}
      contactNumber={[contactDetails1,contactDetails2]}  
      emailId={[]}    />
  );
};
