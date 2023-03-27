import ServiceDiscription from "../PageLayout/index";
import { iskconyouthforum } from "./constant";
import Images from "../../../assets/image/iyk.jpg";

export const IskconYouthForun: React.FC = () => {
  return (
    <ServiceDiscription
      title="Iskon Youth Forum"
      content={iskconyouthforum} 
      imageUrl={Images}/>
  );
}