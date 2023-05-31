import { Festival } from "../PageLayout";
import { gaurPurnima } from "./constant";

export const GaurPurnima: React.FC = () => {
  return (
    <Festival
      title="Gaur Purnima"
      content={gaurPurnima}
      imageUrl={""}
      date={"July 03, 2023"}
    />
  );
};
