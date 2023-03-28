import ServiceDiscription from "../PageLayout/index";
import { iskconYouthForum } from "./constant";
import iskconYouthForumImage from "../../../assets/image/iskcon-youth-forum.jpg";

export const IskconYouthForun: React.FC = () => {
  return (
    <ServiceDiscription
      title="Iskon Youth Forum"
      content={iskconYouthForum}
      imageUrl={iskconYouthForumImage}
    />
  );
};
