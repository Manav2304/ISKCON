import { Festival } from "../PageLayout";
import { radhashtami } from "./constant";
import radhashtamiImage from "../../../assets/images/radhashtami.jpg";

export const Radhashtami: React.FC = () => {
  return (
    <Festival
      title="Flower Festival "
      content={radhashtami}
      image={radhashtamiImage}
      date={"September 23, 2023"}
    />
  );
};
