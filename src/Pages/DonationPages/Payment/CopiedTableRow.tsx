import { useState } from "react";
import { CopyButton, TableCellCard, TableRow } from "./style";

export const CopiedTableRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <TableRow>
      <TableCellCard>{label}</TableCellCard>
      <TableCellCard>{value}</TableCellCard>
      <TableCellCard>
        <CopyButton copied={isCopied} onClick={copyToClipboard}>
          {isCopied ? "Copied!" : "Copy"}
        </CopyButton>
      </TableCellCard>
    </TableRow>
  );
};
