import { ServiceDescription } from "../PageLayout/index";
import {
  kirtanAtIskcon,
  kirtanAtIskconImages,
  contactDetails,
} from "./constant";

export const KirtanAtIskcon: React.FC = () => {
  return (
    <ServiceDescription
      title="Kirtan At Iskcon"
      content={kirtanAtIskcon}
      imageUrl={kirtanAtIskconImages}
      contactNumber={contactDetails}    />
  );
};
