import { ServiceDiscription } from "../PageLayout/index";
import { devoteeKitchen } from "./constant";
import devoteeKitchenImage from "../../../assets/images/devoteeKitchen.jpg";

export const DevoteeKitchen: React.FC = () => {
  return (
    <ServiceDiscription
      title="Devotee Kitchen"
      content={devoteeKitchen}
      imageUrl={devoteeKitchenImage}
    />
  );
};
