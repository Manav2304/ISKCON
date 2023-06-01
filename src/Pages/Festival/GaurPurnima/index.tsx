import { Festival } from "../PageLayout";
import { gaurPurnima } from "./constant";
import gaurPurnimaImage from "../../../assets/images/gaur-purnima.jpg";

export const GaurPurnima: React.FC = () => {
  return (
    <Festival
      title="Gaur Purnima"
      content={gaurPurnima}
      image={gaurPurnimaImage}
      date={"July 03, 2023"}
    />
  );
};
