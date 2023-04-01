import { ServiceDiscription } from "../PageLayout/index";
import { kirtanAtIskcon } from "./constant";
import kirtanAtIskconImage from "../../../assets/images/kirtan-at-iskcon.jpg";

export const KirtanAtIskcon: React.FC = () => {
  return (
    <ServiceDiscription
      title="Kirtan At Iskcon"
      content={kirtanAtIskcon}
      imageUrl={kirtanAtIskconImage}
    />
  );
};
