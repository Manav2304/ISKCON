import TextSection from "../PageLayout/index";
import { bookdistribution } from"./constant";

export const BookDistribution: React.FC = () => {
  return (
    <TextSection
      title="Book Distribution"
      content={bookdistribution} 
      imageUrl={""}    />
  );
}