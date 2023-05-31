import { Festival } from "../PageLayout";
import { janmashtami } from "./constant";

export const Janmashtami: React.FC = () => {
  return (
    <Festival
      title="Janmashtami"
      content={janmashtami}
      imageUrl={[]}
      date={"September 7, 2023"}
    />
  );
};
