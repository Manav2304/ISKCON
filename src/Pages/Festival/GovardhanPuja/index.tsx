import { Festival } from "../PageLayout";
import { govardhanPuja } from "./constant";
import govardhanPujaImage from "../../../assets/images/govardhan-puja.jpg";

export const GovardhanPuja: React.FC = () => {
  return (
    <Festival
      title="Govardhan Puja"
      content={govardhanPuja}
      image={govardhanPujaImage}
      date={"November 13, 2023"}
    />
  );
};
