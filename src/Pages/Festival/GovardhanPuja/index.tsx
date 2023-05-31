import { Festival } from "../PageLayout";
import { govardhanPuja } from "./constant";

export const GovardhanPuja: React.FC = () => {
  return (
    <Festival
      title="Govardhan Puja"
      content={govardhanPuja}
      imageUrl={""}
      date={"November 13, 2023"}
    />
  );
};
