import { founder } from "../constant";
import TextSection from "../TesxtSection";

export const Founderpage: React.FC = () => {
  return (
    <div>
      <TextSection
        title="Founder"
        content={founder}
        imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
      />
    </div>
  );
};
