import { ServiceDescription } from "../PageLayout/index";
import {
  bookDistribution,
  bookDistributionImages,
  contactDetails,
} from "./constant";

export const BookDistribution: React.FC = () => {
  return (
    <ServiceDescription
      title="Book Distribution"
      content={bookDistribution}
      imageUrl={bookDistributionImages}
      contactNumber={contactDetails}
      emailId={[]}
    />
  );
};
