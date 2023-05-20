import { Table, TableStyle, Wrapper } from "./style";
import { yesBankAccountInfo, iciciBankAccountInfo } from "./constant";
import { CopiedTableRow } from "./CopiedTableRow";
import { HeadingStyle } from "../../TitleBase/style";

export const Donation = () => {
  return (
    <Wrapper>
      <TableStyle>
        <div className="grid-container">
          <div>
            <HeadingStyle>
              <h1>YES bank</h1>
            </HeadingStyle>
            <Table>
              <tbody>
                {yesBankAccountInfo.map((info) => (
                  <CopiedTableRow label={info.label} value={info.value} />
                ))}
              </tbody>
            </Table>
          </div>
          <div>
            <HeadingStyle>
              <h1>ICICI Bank</h1>
            </HeadingStyle>
            <Table>
              <tbody>
                {iciciBankAccountInfo.map((info) => (
                  <CopiedTableRow label={info.label} value={info.value} />
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </TableStyle>
      </Wrapper>
  );
};
