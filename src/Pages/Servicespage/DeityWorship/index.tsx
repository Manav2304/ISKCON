import ServiceDiscription from "../PageLayout/index";
import { deityworship } from "./constant";
import Images from "../../../assets/image/deityworship.jpg";

export const DeityWorship: React.FC = () => {
  return (
    <ServiceDiscription
      title="Deity Worship"
      content={deityworship}
      imageUrl={Images}/>
  );
}