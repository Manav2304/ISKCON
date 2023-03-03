import React from "react";
import { AboutUsText } from "./style";
import { aboutUs } from "./constant";
import { PageBackground } from "./style";

const AboutUs: React.FunctionComponent = () => {
  return (
    <PageBackground>
      <div className="manav">
        <AboutUsText>
          <div className="container">{aboutUs}</div>
        </AboutUsText>
      </div>
    </PageBackground>
  );
};
export default AboutUs;
