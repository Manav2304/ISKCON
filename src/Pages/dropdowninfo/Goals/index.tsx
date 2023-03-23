import { goals } from "./constant";
import TextSection from "../TesxtSection";
export const GoalsPage: React.FC = () => {
  return (
    <div>
      <TextSection
        title="Goals"
        content={goals}
        imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
      />
    </div>
  );
};
