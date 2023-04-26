import { ServiceDescription } from "../PageLayout/index";
import { bookDistribution ,bookDistributionImages, contactDetailes1, contactDetailes2 } from "./constant";


export const BookDistribution: React.FC = () => {
  return (
    <ServiceDescription
      title="Book Distribution"
      content={bookDistribution}
      imageUrl={bookDistributionImages}
      contactNumber1={contactDetailes1}
      contactNumber2={contactDetailes2} 
      emailId={[]}    />
  );
};
