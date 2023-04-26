import { ServiceDescription } from "../PageLayout/index";
import { kirtanAtIskcon,kirtanAtIskconImages, contactDetailes } from "./constant";

export const KirtanAtIskcon: React.FC = () => {
  return (
    <ServiceDescription
      title="Kirtan At Iskcon"
      content={kirtanAtIskcon}
      imageUrl={kirtanAtIskconImages} 
      contactNumber1={contactDetailes} 
      contactNumber2={[]} emailId={[]}    />
  );
};
