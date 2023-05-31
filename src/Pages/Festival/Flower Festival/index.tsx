import { Festival } from "../PageLayout";
import { flowerFestival } from "./constant";

export const FlowerFestival: React.FC = () => {
  return (
    <Festival
      title="Flower Festival "
      content={flowerFestival}
      imageUrl={[]}
      date={"March 25, 2023"}
    />
  );
};
