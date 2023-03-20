import React from "react";
import { iskconyouthforum } from "./constant";
import {
  HeadStyle,
  ParagraphStyle,
  ServiceWrapper,
  TextWrapper,
} from "../style";

const mapiskconyouthforum = iskconyouthforum.map((paragraph) => (
  <p>{paragraph}</p>
));
export const IskconYouthForum = () => {
  return (
    <ServiceWrapper>
      <HeadStyle>
        <h1>Iskcon Youth Forum - IYF</h1>
      </HeadStyle>
      <TextWrapper>
        <ParagraphStyle>{iskconyouthforum}</ParagraphStyle>
      </TextWrapper>
    </ServiceWrapper>
  );
};
