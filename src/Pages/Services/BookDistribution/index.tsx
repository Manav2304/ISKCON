import { ServiceDescription } from "../PageLayout/index";
import { bookDistribution ,bookDistributionImages, contactDetails1, contactDetails2 } from "./constant";


export const BookDistribution: React.FC = () => {
  return (
    <ServiceDescription
      title="Book Distribution"
      content={bookDistribution}
      imageUrl={bookDistributionImages}
      contactNumber={[contactDetails1,contactDetails2]}
      emailId={[]}    />
  );
};
