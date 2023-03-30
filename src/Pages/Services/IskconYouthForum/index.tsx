import { ServiceDiscription } from "../PageLayout/index";
import { iskconYouthForum } from "./constant";
import iskconYouthForumImage from "../../../assets/images/iskconYouthForum.jpg";

export const IskconYouthForun: React.FC = () => {
  return (
    <ServiceDiscription
      title="Iskon Youth Forum"
      content={iskconYouthForum}
      imageUrl={iskconYouthForumImage}
    />
  );
};
