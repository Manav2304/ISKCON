import { founder } from "./constant";
import { HomePageInfo } from "../HomePageInfo";

export const FounderPage: React.FC = () => {
  return (
    <div>
      <HomePageInfo
        title="Founder"
        content={founder}
        imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
      />
    </div>
  );
};
