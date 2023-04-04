import { ServiceDescription } from "../PageLayout/index";
import { iskconYouthForum,iskconYouthForumImages } from "./constant";

export const IskconYouthForum: React.FC = () => {
  return (
    <ServiceDescription
      title="Iskon Youth Forum"
      content={iskconYouthForum}
      imageUrl={iskconYouthForumImages}
    />
  );
};
