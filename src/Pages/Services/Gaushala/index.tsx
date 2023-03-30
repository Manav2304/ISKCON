import { ServiceDiscription } from "../PageLayout/index";
import { gaushala } from "./constant";
import goverdhanGaushalaImage from "../../../assets/images/goverdhanGaushala.jpg";

export const Gaushala: React.FC = () => {
  return (
    <ServiceDiscription
      title="Goverdhan Gaushala"
      content={gaushala}
      imageUrl={goverdhanGaushalaImage}
    />
  );
};
