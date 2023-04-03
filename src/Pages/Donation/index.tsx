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
import { accountInfo1, accountInfo2, bhagavadGita } from "./constant";
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
      <>
      <TableStyle>
        <Heading>YES bank</Heading>
        <Table>
          <tbody>
            {accountInfo1.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
      <br/>
        <Heading>ICICI Bank</Heading>
        <Table>
          <tbody>
            {accountInfo2.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
      </TableStyle>
      </>
    </Wrapper>
  );
};
