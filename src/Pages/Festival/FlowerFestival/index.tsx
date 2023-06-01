import { Festival } from "../PageLayout";
import { flowerFestival } from "./constant";
import flowerFestivalImage from "../../../assets/images/flower-festival.jpg";

export const FlowerFestival: React.FC = () => {
  return (
    <Festival
      title="Flower Festival "
      content={flowerFestival}
      image={flowerFestivalImage}
      date={"March 25, 2023"}
    />
  );
};
