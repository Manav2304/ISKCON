import {
  Wrapper,
  Title,
  Table,
  Paragraph,
  ImageWrapper,
  Image,
  TableStyle,
  Heading,
} from "./style";
import {
  yesBankAccountInfo,
  iciciBankAccountInfo,
  bhagavadGita,
} from "./constant";
import { CopiedTableRow } from "./CopiedTableRow";
import titleBaseImg from "../../assets/images/title-base.png";

export const DonationPage = () => {
  return (
    <Wrapper>
      <Title>Donation</Title>
      <ImageWrapper>
        <Image src={titleBaseImg} />
      </ImageWrapper>
      {bhagavadGita.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
      <TableStyle>
        <Heading>YES bank</Heading>
        <Table>
          <tbody>
            {yesBankAccountInfo.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
        <br />
        <Heading>ICICI Bank</Heading>
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
