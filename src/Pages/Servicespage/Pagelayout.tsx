import {
    HeadStyle,
    ParagraphStyle,
    ServiceWrapper,
    TextWrapper,
  } from "./style";
import { bookdistributiontext } from "./constant-detail";
interface BookdistributionProps {
    title: string;
  }
  export const Bookdistribution = (props: BookdistributionProps) => {
    return (
      <ServiceWrapper>
        <HeadStyle>
          <h1>{props.title}</h1>
        </HeadStyle>
        <TextWrapper>
          <ParagraphStyle>{bookdistributiontext}</ParagraphStyle>
        </TextWrapper>
      </ServiceWrapper>
    );
  };
  