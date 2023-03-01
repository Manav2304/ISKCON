import React from "react";
import { AboutUsText } from "./style";
import { aboutUs } from "./constant";

export const AboutUs: React.FunctionComponent = () => {
  return (
    <div className="container border border-dark">
      <AboutUsText>{aboutUs}</AboutUsText>
    </div>
  );
};
