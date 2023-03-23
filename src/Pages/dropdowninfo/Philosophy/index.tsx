import TextSection from "../TesxtSection";
import { philosophy } from "./constant";

export const PhilosophyPage: React.FC = () => {
  return (
    <TextSection
      title="Philosophy"
      content={philosophy}
      imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
    />
  );
};
