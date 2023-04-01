import { ServiceDiscription } from "../PageLayout/index";
import { gaushala } from "./constant";
import goverdhanGaushalaImage from "../../../assets/images/goverdhan-gaushala.jpg";

export const Gaushala: React.FC = () => {
  return (
    <ServiceDiscription
      title="Goverdhan Gaushala"
      content={gaushala}
      imageUrl={goverdhanGaushalaImage}
    />
  );
};
