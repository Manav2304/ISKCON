import { Wrapper, Title, Table, Paragraph } from "./style";
import { accountInfo, bhagavadGita } from "./constant";
import { CopiedTableRow } from "./CopiedTableRow";

const DonationPage = () => {
  return (
    <Wrapper>
      <Title>Donate Now</Title>
      {bhagavadGita.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
      <Table>
        <tbody>
          {accountInfo.map((info, index) => (
            <CopiedTableRow key={index} label={info.label} value={info.value} />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default DonationPage;
