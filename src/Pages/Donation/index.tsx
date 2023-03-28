import { Wrapper, Title, Table, Paragraph, ImageDiv, Image } from "./style";
import { accountInfo, bhagavadGita } from "./constant";
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
