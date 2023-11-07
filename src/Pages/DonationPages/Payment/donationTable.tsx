import React, { useState } from "react";
import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  DonationHeader,
  Wrapper,
  Input,
  CardStyle,
  CardContentStyle,
  TypoGraphyMain,
  PageWrapper,
  TableWrapper,
  TypoGraphy,
  BarcodeImgStyle,
  DonateButton1,
  LabelWrapper,
  Input1,
  LabelWrapper1,
  Labelstyle,
  Span,
  Span1,
  Span2,
  DonateButton,
} from "./style";
import {
  DonationCategory,
  iciciBankAccountInfo,
  maintitle,
  subtitle2,
  subtitle1,
  yesBankAccountInfo,
} from "./constant";
import BarCode from "../../../assets/images/barcode.png";
import { BankInfo } from "./CopiedTableRow";
import { DonationForm } from "./DonationForm";

type Donation = {
  id: number;
  title: string;
  amount: number;
};

export const Payment: React.FC<{ donationCategories: DonationCategory[] }> = ({
  donationCategories,
}) => {
  const [selectedDonations, setSelectedDonations] = useState<Donation[]>([]);
  const [customAmount] = useState<number | string>(0);
  const [isDonationFormOpen, setDonationFormOpen] = useState(false);

  const openDonationForm = () => {
    setDonationFormOpen(true);
  };

  const handleDonationSubmit = (formData: any) => {
    // Handle the form submission here, e.g., send the data to the backend
    console.log(formData);
  };

  const handleDonationSelect = (donation: Donation) => {
    if (selectedDonations.find((d) => d.id === donation.id)) {
      setSelectedDonations((prevState) =>
        prevState.filter((d) => d.id !== donation.id),
      );
    } else {
      setSelectedDonations((prevState) => [...prevState, donation]);
    }
  };

  const totalDonationAmount = selectedDonations.reduce(
    (acc, curr) => acc + curr.amount,
    Number(customAmount),
  );

  const formatAmountInINR = (amount: number | bigint) => {
    const formattedAmount = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

    return formattedAmount.replace(/\.00$/, "");
  };

  return (
    <>
      <Wrapper>
        <Container>
          <form>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Select</TableHeader>
                  <TableHeader>Donation</TableHeader>
                  <TableHeader>Amount</TableHeader>
                </tr>
              </thead>
              <tbody>
                {donationCategories.map((category) => (
                  <React.Fragment key={category.title}>
                    <TableCell colSpan={3}>
                      <DonationHeader>{category.title}</DonationHeader>
                    </TableCell>
                    {category.donations.map((donation) => (
                      <TableRow key={donation.id}>
                        <TableCell>
                          <Input
                            type="checkbox"
                            checked={
                              selectedDonations.find(
                                (d) => d.id === donation.id,
                              )
                                ? true
                                : false
                            }
                            onChange={() => handleDonationSelect(donation)}
                          />
                        </TableCell>
                        <TableCell>{donation.title}</TableCell>
                        <TableCell>
                          {formatAmountInINR(donation.amount)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
            <LabelWrapper1>
              <Labelstyle>
                Total Amount:- {formatAmountInINR(totalDonationAmount)}
              </Labelstyle>
              <DonateButton onClick={openDonationForm}>Donate</DonateButton>
            </LabelWrapper1>

            {/* Render the DonationForm component only if the form is open */}
            {isDonationFormOpen && (
              <DonationForm onClose={() => setDonationFormOpen(false)} onSubmit={handleDonationSubmit} />
            )}

            <br />
            <Span2>Or, Donation of your choice:-</Span2>
            <LabelWrapper>
              <Input1 type="number" placeholder="Enter amount" />
              <DonateButton1>Donate</DonateButton1>
            </LabelWrapper>
          </form>
        </Container>
      </Wrapper>
      <br />
      <Span>Donate via NEFT/RTGS/UPI</Span>
      <br />
      <Span1>Only for Indian Citizen/Indian Passport Holder</Span1>

      <PageWrapper>
        <CardStyle>
          <CardContentStyle>
            <TypoGraphyMain>Donate via NEFT/RTGS</TypoGraphyMain>
            <TableWrapper>
              <BankInfo accountInfo={yesBankAccountInfo} />
            </TableWrapper>
          </CardContentStyle>
        </CardStyle>
        <CardStyle>
          <CardContentStyle>
            <TypoGraphyMain>Donate via NEFT/RTGS</TypoGraphyMain>
            <TableWrapper>
              <BankInfo accountInfo={iciciBankAccountInfo} />
            </TableWrapper>
          </CardContentStyle>
        </CardStyle>
        <CardStyle>
          <CardContentStyle>
            <TypoGraphyMain>{maintitle}</TypoGraphyMain>
            <TypoGraphy>{subtitle1}</TypoGraphy>
            <TypoGraphy>{subtitle2}</TypoGraphy>
            <BarcodeImgStyle image={BarCode} />
          </CardContentStyle>
        </CardStyle>
      </PageWrapper>
    </>
  );
};
