import { ServiceDiscription } from "../PageLayout/index";
import { bookDistribution } from "./constant";
import bookDistributionImage from "../../../assets/images/book-distribution.jpg";

export const BookDistribution: React.FC = () => {
  return (
    <ServiceDiscription
      title="Book Distribution"
      content={bookDistribution}
      imageUrl={bookDistributionImage}
    />
  );
};
