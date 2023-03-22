import TextSection from "../PageLayout/index";
import { gaushala } from "./constant";

export const Gaushala: React.FC = () => {
  return (
    <TextSection
      title="Goverdhan Gaushala"
      content={gaushala} 
      imageUrl={""}    />
  );
}