import { ServiceDiscription } from "../PageLayout/index";
import { kirtanAtIskcon,kirtanAtIskconImage } from "./constant";

export const KirtanAtIskcon: React.FC = () => {
  return (
    <ServiceDiscription
      title="Kirtan At Iskcon"
      content={kirtanAtIskcon}
      imageUrl={kirtanAtIskconImage}
    />
  );
};
