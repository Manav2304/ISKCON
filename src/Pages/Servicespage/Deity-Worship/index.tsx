import React from "react";
import { deityworship } from "./constant";
import {
  HeadStyle,
  ParagraphStyle,
  ServiceWrapper,
  TextWrapper,
} from "../style";

const mapdeityship = deityworship.map((paragraph) => <p>{paragraph}</p>);
export const DeityWorship = () => {
  return (
    <ServiceWrapper>
      <HeadStyle>
        <h1> Deity Worship</h1>
      </HeadStyle>
      <TextWrapper>
        <ParagraphStyle>{deityworship}</ParagraphStyle>
      </TextWrapper>
    </ServiceWrapper>
  );
};
