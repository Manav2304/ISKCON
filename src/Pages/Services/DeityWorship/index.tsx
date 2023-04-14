import { ServiceDescription } from "../PageLayout/index";
import { deityWorship,deityWorshipImages } from "./constant";

export const DeityWorship: React.FC = () => {
  return (
    <ServiceDescription
      title="Deity Worship"
      content={deityWorship}
      imageUrl={deityWorshipImages}
    />
  );
};
