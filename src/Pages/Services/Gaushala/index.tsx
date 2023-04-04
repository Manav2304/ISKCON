import { ServiceDescription } from "../PageLayout/index";
import { gaushala, goverdhanGaushalaImages } from "./constant";

export const Gaushala: React.FC = () => {
  return (
    <ServiceDescription
      title="Goverdhan Gaushala"
      content={gaushala}
      imageUrl={goverdhanGaushalaImages}
    />
  );
};
