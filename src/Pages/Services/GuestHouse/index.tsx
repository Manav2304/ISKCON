import { ServiceDescription } from "../PageLayout/index";
import { guestHouse, guestHouseImages, contactDetailes1, contactDetailes2 } from "./constant";

export const GuestHouse: React.FC = () => {
  return (
    <ServiceDescription
      title="Guest House"
      content={guestHouse}
      imageUrl={guestHouseImages}
      contactNumber1={contactDetailes1} 
      contactNumber2={contactDetailes2} 
      emailId={[]}    />
  );
};
