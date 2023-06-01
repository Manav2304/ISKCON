import { Festival } from "../PageLayout";
import { kartikDipawali } from "./constant";
import kartikDipawaliImage from "../../../assets/images/kartik-dipawali.jpg";

export const KartikDipawali: React.FC = () => {
  return (
    <Festival
      title="Kartik Dipawali "
      content={kartikDipawali}
      image={kartikDipawaliImage}
      date={"November 12, 2023"}
    />
  );
};
