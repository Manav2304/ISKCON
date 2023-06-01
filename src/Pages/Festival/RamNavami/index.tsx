import { Festival } from "../PageLayout";
import { ramNavami } from "./constant";
import ramNavamiImage from "../../../assets/images/ramnavami.jpg";

export const RamNavami: React.FC = () => {
  return (
    <Festival
      title="Ram Navami"
      content={ramNavami}
      image={ramNavamiImage}
      date={"July 03, 2023"}
    />
  );
};
