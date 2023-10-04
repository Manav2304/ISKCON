import { useState } from "react";
import { BankInfoContainer, InfoItem, Label1, Value, CopyImg } from "./style";
import CopyIcon from "../../../../src/assets/images/duplicate.svg";

export const BankInfo = ({
  accountInfo,
}: {
  accountInfo: Array<{ label: string; value: string }>;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyAllToClipboard = () => {
    const combinedValue = accountInfo.map((info) => info.value).join("\n");
    navigator.clipboard.writeText(combinedValue);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <BankInfoContainer>
      {accountInfo.map((info, index) => (
        <InfoItem key={index}>
          <Label1>{info.label}</Label1>
          <Value>{info.value}</Value>
        </InfoItem>
      ))}
      <CopyImg src={CopyIcon} alt="Copy Icon" onClick={copyAllToClipboard} />
    </BankInfoContainer>
  );
};
