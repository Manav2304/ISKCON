import { ServiceDescription } from "../PageLayout/index";
import { govindaFoodImages, govindaFood } from "./constant";

export const GovindaFood: React.FC = () => {
  return (
    <ServiceDescription
      title="Govinda's Food"
      content={govindaFood}
      imageUrl={govindaFoodImages}
      contactNumber={[]}
    />
  );
};
