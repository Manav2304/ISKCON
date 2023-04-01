import ServiceDiscriptoin from "../PageLayout/index";
import { bookdistribution } from"./constant";
import bookDistributionImage from "../../../assets/images/book-distribution.jpg";

export const BookDistribution: React.FC = () => {
  return (
    <ServiceDiscriptoin
      title="Book Distribution"
      content={bookdistribution} 
      imageUrl={bookDistributionImage}/>
  );
}