import ServiceDiscription from "../PageLayout/index";
import { kirtanatiskcon } from "./constant";
import kirtanAtIskconImage from "../../../assets/images/kirtan-at-iskcon.jpg";

export const KirtanAtIskcon: React.FC = () => {
  return (
    <ServiceDiscription
      title="Kirtan At Iskcon"
      content={kirtanatiskcon}
      imageUrl={kirtanAtIskconImage}/>
  );
}