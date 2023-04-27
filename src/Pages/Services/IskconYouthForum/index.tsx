import { ServiceDescription } from "../PageLayout/index";
import { iskconYouthForum,iskconYouthForumImages, contactDetails1, contactDetails2, emailDetails } from "./constant";

export const IskconYouthForum: React.FC = () => {
  return (
    <ServiceDescription
      title="Iskon Youth Forum"
      content={iskconYouthForum}
      imageUrl={iskconYouthForumImages}
      contactNumber={[contactDetails1,contactDetails2]}
      emailId={emailDetails} />
  );
};
