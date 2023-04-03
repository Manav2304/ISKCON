import { ServiceDiscription } from "../PageLayout/index";
import { gaushala, goverdhanGaushalaImage } from "./constant";

export const Gaushala: React.FC = () => {
  return (
    <ServiceDiscription
      title="Goverdhan Gaushala"
      content={gaushala}
      imageUrl={goverdhanGaushalaImage}
    />
  );
};
