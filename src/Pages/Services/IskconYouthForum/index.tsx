import { ServiceDescription } from "../PageLayout/index";
import {
  iskconYouthForum,
  iskconYouthForumImages,
  contactDetails,
  emailDetails,
} from "./constant";

export const IskconYouthForum: React.FC = () => {
  return (
    <ServiceDescription
      title="Iskon Youth Forum"
      content={iskconYouthForum}
      imageUrl={iskconYouthForumImages}
      contactNumber={contactDetails}
      emailId={emailDetails}
    />
  );
};
