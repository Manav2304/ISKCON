import { founder } from "./constant";
import { HomePageDropDownInfo } from "../HomePageDropDownInfo";

export const FounderPage: React.FC = () => {
  return (
    <div>
      <HomePageDropDownInfo
        title="Founder"
        content={founder}
        imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
        altText="Founder Img"
      />
    </div>
  );
};
