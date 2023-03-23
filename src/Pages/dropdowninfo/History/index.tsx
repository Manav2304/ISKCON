import TextSection from "../TesxtSection";
import { history } from "./constant";

export const HistoryPage: React.FC = () => {
  return (
    <TextSection
      title="History"
      content={history}
      imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
    />
  );
};
