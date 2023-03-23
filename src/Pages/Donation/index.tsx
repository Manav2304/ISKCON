import { useState } from 'react';
import {
  Wrapper,
  Title,
  Table,
  TableRow,
  TableCell,
  CopyButton,
  Paragraph,
} from './style';
import { accountInfo, bhagavadGita } from './constant';

const mapBHAGAVAD_GITA = bhagavadGita.map((paragraph) => <Paragraph key={paragraph}>{paragraph}</Paragraph>);

const CopiedTableRow = ({ label, value }: { label: string; value: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <TableRow>
      <TableCell>{label}</TableCell>
      <TableCell>{value}</TableCell>
      <TableCell>
        <CopyButton copied={isCopied} onClick={() => copyToClipboard(value)}>
          {isCopied ? 'Copied!' : 'Copy'}
        </CopyButton>
      </TableCell>
    </TableRow>
  );
};

const DonationPage = () => {
  return (
    <Wrapper>
      <Title>Donate Now</Title>
      {mapBHAGAVAD_GITA}
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