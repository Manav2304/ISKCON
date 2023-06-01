import { Festival } from "../PageLayout";
import { prabhupadaAppearanceDay } from "./constant";
import prabhupadaAppearanceDayImage from "../../../assets/images/prabhupada-appearance-day.jpg";

export const PrabhupadaAppearanceDay: React.FC = () => {
  return (
    <Festival
      title="Prabhupada Appearance Day  "
      content={prabhupadaAppearanceDay}
      image={prabhupadaAppearanceDayImage}
      date={"November 12, 2023"}
    />
  );
};
