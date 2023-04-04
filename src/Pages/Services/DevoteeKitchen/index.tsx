import { ServiceDescription } from "../PageLayout/index";
import { devoteeKitchen } from "./constant";

export const DevoteeKitchen: React.FC = () => {
  return (
    <ServiceDescription
      title="Devotee Kitchen"
      content={devoteeKitchen}
      imageUrl={[]}
    />
  );
};
