import ServiceDiscriptoin from "../PageLayout/index";
import { bookdistribution } from"./constant";
import images from "../../../assets/image/bookdistribution.jpg";

export const BookDistribution: React.FC = () => {
  return (
    <ServiceDiscriptoin
      title="Book Distribution"
      content={bookdistribution} 
      imageUrl={images}/>
  );
}