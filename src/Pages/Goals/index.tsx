import { goals } from "./constant";
import { HomePageInfo } from "../HomePageInfo";

export const GoalsPage: React.FC = () => {
  return (
    <div>
      <HomePageInfo
        title="Goals"
        content={goals}
        imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
      />
    </div>
  );
};
