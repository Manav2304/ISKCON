import { useState } from 'react';
import {
  Wrapper,
  Title,
  TableWrapper,
  Table,
  TableRow,
  TableHeader,
  TableData,
  CopyButton,
  Paragraph,
} from './style';
import {
  account_name,
  bank_name,
  branch_name,
  account_number,
  ifsc_code,
  bhagavad_gita,
} from './constant';
const mapBHAGAVAD_GITA = bhagavad_gita.map((paragraph)=><p>{paragraph}</p>);
const DonationPage = () => {
  const [isAccountNameCopied, setIsAccountNameCopied] = useState(false);
  const [isBankNameCopied, setIsBankNameCopied] = useState(false);
  const [isBranchNameCopied, setIsBranchNameCopied] = useState(false);
  const [isAccountNumberCopied, setIsAccountNumberCopied] = useState(false);
  const [isIFSCCodeCopied, setIsIFSCCodeCopied] = useState(false);

  const copyToClipboard = (text: string, setIsCopied: (isCopied: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <Wrapper>
      <Title>Donate Now</Title>
      <Paragraph>{mapBHAGAVAD_GITA}</Paragraph>
      <TableWrapper>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>Information</TableHeader>
              <TableHeader>Details</TableHeader>
              <TableHeader>Copy</TableHeader>
            </TableRow>
            <TableRow>
              <TableData>Account Name:</TableData>
              <TableData>{account_name}</TableData>
              <TableData>
                <CopyButton
                  copied={isAccountNameCopied}
                  onClick={() => copyToClipboard(account_name, setIsAccountNameCopied)}
                >
                  {isAccountNameCopied ? 'Copied!' : 'Copy'}
                </CopyButton>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>Bank Name:</TableData>
              <TableData>{bank_name}</TableData>
              <TableData>
                <CopyButton
                  copied={isBankNameCopied}
                  onClick={() => copyToClipboard(bank_name, setIsBankNameCopied)}
                >
                  {isBankNameCopied ? 'Copied!' : 'Copy'}
                </CopyButton>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>Branch Name:</TableData>
              <TableData>{branch_name}</TableData>
              <TableData>
                <CopyButton
                  copied={isBranchNameCopied}
                  onClick={() => copyToClipboard(branch_name, setIsBranchNameCopied)}
                >
                  {isBranchNameCopied ? 'Copied!' : 'Copy'}
                </CopyButton>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>Account Number:</TableData>
              <TableData>{account_number}</TableData>
              <TableData>
                <CopyButton
                  copied={isAccountNumberCopied}
                  onClick={() =>
                    copyToClipboard(account_number, setIsAccountNumberCopied)
                  }
                >
                  {isAccountNumberCopied ? 'Copied!' : 'Copy'}
                </CopyButton>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>IFSC Code:</TableData>
              <TableData>{ifsc_code}</TableData>
              <TableData>
                <CopyButton
                  copied={isIFSCCodeCopied}
                  onClick={() => copyToClipboard(ifsc_code, setIsIFSCCodeCopied)}          
                    >
                  {isIFSCCodeCopied ? 'Copied!' : 'Copy'}
                </CopyButton>
              </TableData>
            </TableRow>
          </tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
    );
  };
  
  export default DonationPage;
    
               
