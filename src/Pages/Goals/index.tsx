import { goals } from "./constant";
import { HomePageDropDownInfo } from "../HomePageDropDownInfo";

export const GoalsPage: React.FC = () => {
  return (
    <div>
      <HomePageDropDownInfo
        title="Goals"
        content={goals}
        imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
        altText="Goal Img"
      />
    </div>
  );
};
