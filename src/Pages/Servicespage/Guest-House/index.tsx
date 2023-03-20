import React from "react";
import { guesthouse } from "./constant";
import {
  HeadStyle,
  ParagraphStyle,
  ServiceWrapper,
  TextWrapper,
} from "../style";

const mapguesthouse = guesthouse.map((paragraph) => <p>{paragraph}</p>);
export const GuestHouse = () => {
  return (
    <ServiceWrapper>
      <HeadStyle>
        <h1>Prabhupada Ashrya Guest House</h1>
      </HeadStyle>
      <TextWrapper>
        <ParagraphStyle>{guesthouse}</ParagraphStyle>
      </TextWrapper>
    </ServiceWrapper>
  );
};
