import ServiceDiscription from "../PageLayout/index";
import { kirtanatiskcon } from "./constant";
import Images from "../../../assets/image/kirtanatisckon.jpg";

export const KirtanAtIskcon: React.FC = () => {
  return (
    <ServiceDiscription
      title="Kirtan At Iskcon"
      content={kirtanatiskcon}
      imageUrl={Images}/>
  );
}