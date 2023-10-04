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
  Labelstyle,
  CardStyle,
  CardContentStyle,
  TypoGraphyMain,
  PageWrapper,
  TableWrapper,
  TypoGraphy,
  BarcodeImgStyle,
  // DonateButton,
  DonateButton1,
  LabelWrapper,
  Input1,
  LabelWrapper1,
  Labelstyle1,
  Span,
  Span1,
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
// import { RazorpayComponent } from "./RazorpayWrapper";
// import axios from "axios";

type Donation = {
  id: number;
  title: string;
  amount: number;
};

function loadScript(src: string): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const Payment: React.FC<{ donationCategories: DonationCategory[] }> = ({
  donationCategories,
}) => {
  const [selectedDonations, setSelectedDonations] = useState<Donation[]>([]);
  const [customAmount] = useState<number | string>(0);

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

  async function showRazorpay(): Promise<void> {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js",
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const totalAmount = totalDonationAmount;
    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalAmount }), // Send the total amount to the backend
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: "rzp_test_4twsScIlfpBGfM",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      image: "http://localhost:1337/logo.svg",
      handler: function (response: any) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);

        alert("Transaction successful");
      },
      prefill: {
        name: "",
        email: "",
        phone_number: "",
      },
    };

    // Use "any" for paymentObject since Razorpay doesn't provide TypeScript typings
    const paymentObject: any = new window.Razorpay(options);
    paymentObject.open();
  }

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
                        <TableCell>₹{donation.amount} </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
            <LabelWrapper1>
              <Labelstyle1>Total Amount:- ₹{totalDonationAmount}</Labelstyle1>

              {/* <DonateButton onClick={showRazorpay}>Donate</DonateButton> */}
              <a
                className="App-link"
                onClick={showRazorpay}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pay now
              </a>
            </LabelWrapper1>
            <Labelstyle>Or, Donation of your choice:-</Labelstyle>
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
