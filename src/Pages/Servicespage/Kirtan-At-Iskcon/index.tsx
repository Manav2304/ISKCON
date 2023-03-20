import React from "react";
import { kirtanatiskcon } from "./constant";
import {
  HeadStyle,
  ParagraphStyle,
  ServiceWrapper,
  TextWrapper,
} from "../style";

const mapkirtanatiskcon = kirtanatiskcon.map((paragraph) => <p>{paragraph}</p>);
export const KirtanAtIskcon = () => {
  return (
    <ServiceWrapper>
      <HeadStyle>
        <h1>Kirtan At Iskcon </h1>
      </HeadStyle>
      <TextWrapper>
        <ParagraphStyle>{mapkirtanatiskcon}</ParagraphStyle>
      </TextWrapper>
    </ServiceWrapper>
  );
};
