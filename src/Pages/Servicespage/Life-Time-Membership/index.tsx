import React from "react";
import { lifetimemembership } from "./constant";
import {
  HeadStyle,
  ParagraphStyle,
  ServiceWrapper,
  TextWrapper,
} from "../style";

const maplifetimemembership = lifetimemembership.map((paragraph) => (
  <p>{paragraph}</p>
));
export const LifeTimeMembership = () => {
  return (
    <ServiceWrapper>
      <HeadStyle>
        <h1>Life Time Membership </h1>
      </HeadStyle>
      <TextWrapper>
        <ParagraphStyle>{maplifetimemembership}</ParagraphStyle>
      </TextWrapper>
    </ServiceWrapper>
  );
};
