import { Festival } from "../PageLayout";
import { rathYatra } from "./constant";

export const RathYatra: React.FC = () => {
  return (
    <Festival
      title="Rath Yatra"
      content={rathYatra}
      imageUrl={""}
      date={"Jun 20, 2023"}
    />
  );
};
