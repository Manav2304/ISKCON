import { ServiceDiscription } from "../PageLayout/index";
import { iskconYouthForum,iskconYouthForumImage } from "./constant";

export const IskconYouthForun: React.FC = () => {
  return (
    <ServiceDiscription
      title="Iskon Youth Forum"
      content={iskconYouthForum}
      imageUrl={iskconYouthForumImage}
    />
  );
};
