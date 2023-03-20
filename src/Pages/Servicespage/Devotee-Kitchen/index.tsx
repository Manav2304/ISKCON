import React from "react";
import { devoteekitchen } from "./constant";
import {
  HeadStyle,
  ParagraphStyle,
  ServiceWrapper,
  TextWrapper,
} from "../style";

const mapdevoteekitchen = devoteekitchen.map((paragraph) => <p>{paragraph}</p>);
export const DevoteeKitchen = () => {
  return (
    <ServiceWrapper>
      <HeadStyle>
        <h1>Devotee Kitchen </h1>
      </HeadStyle>
      <TextWrapper>
        <ParagraphStyle>{devoteekitchen}</ParagraphStyle>
      </TextWrapper>
    </ServiceWrapper>
  );
};
