import { Festival } from "../PageLayout";
import { radhashtami } from "./constant";

export const Radhashtami: React.FC = () => {
  return (
    <Festival
      title="Flower Festival "
      content={radhashtami}
      imageUrl={[]}
      date={"September 23, 2023"}
    />
  );
};
