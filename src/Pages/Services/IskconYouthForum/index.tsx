import { ServiceDescription } from "../PageLayout/index";
import { iskconYouthForum,iskconYouthForumImages, contactDetailes1, contactDetailes2, emailDetails } from "./constant";

export const IskconYouthForum: React.FC = () => {
  return (
    <ServiceDescription
      title="Iskon Youth Forum"
      content={iskconYouthForum}
      imageUrl={iskconYouthForumImages}
      contactNumber1={contactDetailes1} 
      contactNumber2={contactDetailes2}
      emailId={emailDetails} />
  );
};
