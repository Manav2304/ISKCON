import {
  Wrapper,
  Title,
  Table,
  Paragraph,
  ImageWrapper,
  Image,
  TableStyle,
} from "./style";
import { accountInfo1, accountInfo2, bhagavadGita } from "./constant";
import { CopiedTableRow } from "./CopiedTableRow";
import titleBaseUrl from "../../assets/images/title-base-url.png";

export const DonationPage = () => {
  return (
    <Wrapper>
      <Title>Donation</Title>
      <ImageWrapper>
        <Image src={titleBaseUrl} />
      </ImageWrapper>
      {bhagavadGita.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
      <>
      <TableStyle>
        <Table>
          <tbody>
            {accountInfo1.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
      <br/>
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
