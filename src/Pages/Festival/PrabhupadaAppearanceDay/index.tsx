import { Festival } from "../PageLayout";
import { prabhupadaAppearanceDay } from "./constant";

export const PrabhupadaAppearanceDay: React.FC = () => {
  return (
    <Festival
      title="Prabhupada Appearance Day  "
      content={prabhupadaAppearanceDay}
      imageUrl={[]}
      date={"November 12, 2023"}
    />
  );
};
