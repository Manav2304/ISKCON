import { ServiceDiscription } from "../PageLayout/index";
import { devoteeKitchen } from "./constant";

export const DevoteeKitchen: React.FC = () => {
  return (
    <ServiceDiscription
      title="Devotee Kitchen"
      content={devoteeKitchen}
      imageUrl={[]}
    />
  );
};
