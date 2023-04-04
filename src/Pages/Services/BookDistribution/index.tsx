import { ServiceDescription } from "../PageLayout/index";
import { bookDistribution ,bookDistributionImages} from "./constant";


export const BookDistribution: React.FC = () => {
  return (
    <ServiceDescription
      title="Book Distribution"
      content={bookDistribution}
      imageUrl={bookDistributionImages}
    />
  );
};
