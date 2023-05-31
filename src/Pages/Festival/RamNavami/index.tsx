import { Festival } from "../PageLayout";
import { ramNavami } from "./constant";

export const RamNavami: React.FC = () => {
  return (
    <Festival
      title="Ram Navami"
      content={ramNavami}
      imageUrl={[]}
      date={"July 03, 2023"}
    />
  );
};
