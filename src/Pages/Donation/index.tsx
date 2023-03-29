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
import { accountInfo, accountInfo1, bhagavadGita } from "./constant";
import { CopiedTableRow } from "./CopiedTableRow";
import TitleBase from "../../assets/images/Titlebase.png";

const DonationPage = () => {
  return (
    <Wrapper>
      <Title>Donation</Title>
      <ImageDiv>
        <Image src={TitleBase} />
      </ImageDiv>
      {bhagavadGita.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
      <TableStyle1>
        <Table>
          <tbody>
            {accountInfo.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
      </TableStyle1>
      <TableStyle2>
        <Table>
          <tbody>
            {accountInfo1.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
      </TableStyle2>
    </Wrapper>
  );
};

export default DonationPage;
