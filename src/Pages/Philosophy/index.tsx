import { HomePageDropDownInfo } from "../HomePageDropDownInfo";
import { philosophy } from "./constant";

export const PhilosophyPage: React.FC = () => {
  return (
    <HomePageDropDownInfo
      title="Philosophy"
      content={philosophy}
      imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
      altText="Philosophy Img"
    />
  );
};
