import { Festival } from "../PageLayout";
import { rathYatra } from "./constant";
import rathYatraImage from "../../../assets/images/rath-yatra.jpg";

export const RathYatra: React.FC = () => {
  return (
    <Festival
      title="Rath Yatra"
      content={rathYatra}
      image={rathYatraImage}
      date={"Jun 20, 2023"}
    />
  );
};
