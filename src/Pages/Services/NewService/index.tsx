import { ServiceDescription } from "../PageLayout/index";
import {
  contactDetails,
  newServiceImages,
  newService,
} from "./constant";

export const NewService: React.FC = () => {
  return (
    <ServiceDescription
      title="New Service"
      content={newService}
      imageUrl={newServiceImages}
      contactNumber={contactDetails}    />
  );
};
