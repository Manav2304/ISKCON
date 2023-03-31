import {
  Wrapper,
  Title,
  Table,
  Paragraph,
  ImageDiv,
  Image,
  TableStyle1,
  TableStyle2,
} from "./style";
import { accountInfo1, accountInfo2, bhagavadGita } from "./constant";
import { CopiedTableRow } from "./CopiedTableRow";
import titleBaseUrl from "../../assets/images/title-base-url.png";

export const DonationPage = () => {
  return (
    <Wrapper>
      <Title>Donation</Title>
      <ImageDiv>
        <Image src={titleBaseUrl} />
      </ImageDiv>
      {bhagavadGita.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
      <TableStyle1>
        <Table>
          <tbody>
            {accountInfo1.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
      </TableStyle1>
      <TableStyle2>
        <Table>
          <tbody>
            {accountInfo2.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
      </TableStyle2>
    </Wrapper>
  );
};
