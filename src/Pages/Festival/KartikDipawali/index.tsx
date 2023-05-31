import { Festival } from "../PageLayout";
import { kartikDipawali } from "./constant";

export const KartikDipawali: React.FC = () => {
  return (
    <Festival
      title="Kartik Dipawali "
      content={kartikDipawali}
      imageUrl={""}
      date={"November 12, 2023"}
    />
  );
};
