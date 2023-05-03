import { ServiceDescription } from "../PageLayout/index";
import { goushala, goverdhangoushalaImages, contactDetails } from "./constant";

export const Gaushala: React.FC = () => {
  return (
    <ServiceDescription
      title="Goverdhan Gaushala"
      content={goushala}
      imageUrl={goverdhangoushalaImages}
      contactNumber={contactDetails}    />
  );
};
