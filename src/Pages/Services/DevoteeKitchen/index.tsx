import { ServiceDescription } from "../PageLayout/index";
import { devoteeKitchen, devoteeKitchenImages } from "./constant";

export const DevoteeKitchen: React.FC = () => {
  return (
    <ServiceDescription
      title="Devotee Kitchen"
      content={devoteeKitchen}
      imageUrl={devoteeKitchenImages}
      contactNumber1={[]} contactNumber2={[]} emailId={[]}    />
  );
};
