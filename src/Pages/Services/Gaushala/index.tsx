import { ServiceDescription } from "../PageLayout/index";
import { goushala, goverdhangoushalaImages, contactDetailes1 } from "./constant";

export const Gaushala: React.FC = () => {
  return (
    <ServiceDescription
      title="Goverdhan Gaushala"
      content={goushala}
      imageUrl={goverdhangoushalaImages}
      contactNumber1={contactDetailes1}
      contactNumber2={[]} emailId={[]}    />
  );
};
