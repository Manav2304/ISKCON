import TextSection from "../PageLayout/index";
import { guesthouse } from "./constant";

export const GuestHouse: React.FC = () => {
  return (
    <TextSection
      title="Prabhupada Ashrya Guest House"
      content={guesthouse} imageUrl={""}    />
  );
}