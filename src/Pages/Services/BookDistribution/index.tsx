import { ServiceDiscription } from "../PageLayout/index";
import { bookDistribution ,bookDistributionImage} from "./constant";


export const BookDistribution: React.FC = () => {
  return (
    <ServiceDiscription
      title="Book Distribution"
      content={bookDistribution}
      imageUrl={bookDistributionImage}
    />
  );
};
