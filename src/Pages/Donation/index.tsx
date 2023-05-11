import { Wrapper, Table, Paragraph, TableStyle } from "./style";
import {
  yesBankAccountInfo,
  iciciBankAccountInfo,
  bhagavadGita,
} from "./constant";
import { CopiedTableRow } from "./CopiedTableRow";
import titleBaseImg from "../../assets/images/title-base.png";
import { HeadingStyle, ImageTitle, TitleWrapper } from "../TitleBase/style";

export const DonationPage = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <HeadingStyle>
          <h1>Donation</h1>
          <ImageTitle src={titleBaseImg} alt="Title Image" />
        </HeadingStyle>
      </TitleWrapper>
      {bhagavadGita.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
      <TableStyle>
        <HeadingStyle><h1>YES bank</h1></HeadingStyle>
        <Table>
          <tbody>
            {yesBankAccountInfo.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
        <br />
        <HeadingStyle><h1>ICICI Bank</h1></HeadingStyle>
        <Table>
          <tbody>
            {iciciBankAccountInfo.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
      </TableStyle>
    </Wrapper>
  );
};
