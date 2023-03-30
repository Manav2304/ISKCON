import { HomePageInfo } from "../HomePageInfo";
import { philosophy } from "./constant";

export const PhilosophyPage: React.FC = () => {
  return (
    <HomePageInfo
      title="Philosophy"
      content={philosophy}
      imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
    />
  );
};
