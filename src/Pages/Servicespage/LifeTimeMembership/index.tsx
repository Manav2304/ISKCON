import TextSection from "../PageLayout/index";
import { lifetimemembership } from "./constant";

export const LifeTimeMembership: React.FC = () => {
  return (
    <TextSection
      title="Life Time Membership"
      content={lifetimemembership} imageUrl={""}    />
  );
}