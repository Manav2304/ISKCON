import React, { useState } from "react";
import { CopiedTableRow } from "./CopiedTableRow";
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
  CardMediaStyle,
  TypoGraphy,
} from "./style";
import {
  DonationCategory,
  iciciBankAccountInfo,
  maintitle,
  subtitle2,
  subtitle1,
  yesBankAccountInfo,
} from "./constant";
import axios from "axios";
import { TableFoot } from "./style";
import BarCode from "../../../assets/images/barcode.jpeg";

type Donation = {
  id: number;
  title: string;
  amount: number;
};

export const Payment: React.FC<{ donationCategories: DonationCategory[] }> = ({
  donationCategories,
}) => {
  const checkoutHandler = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    // Extract the amount from state or props
    const amount = totalDonationAmount;

    try {
      const {
        data: { key },
      } = await axios.get<{ key: string }>(
        "http://www.localhost:4000/api/getkey",
      );

      const {
        data: { order },
      } = await axios.post<{ order: { amount: number; id: string } }>(
        "http://localhost:4000/api/checkout",
        { amount },
      );

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "6 Pack Programmer",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };
  const [selectedDonations, setSelectedDonations] = useState<Donation[]>([]);
  const [customAmount, setCustomAmount] = useState<number | string>(0);

  const handleDonationSelect = (donation: Donation) => {
    if (selectedDonations.find((d) => d.id === donation.id)) {
      setSelectedDonations((prevState) =>
        prevState.filter((d) => d.id !== donation.id),
      );
    } else {
      setSelectedDonations((prevState) => [...prevState, donation]);
    }
  };

  const handleCustomAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newValue = event.target.value;
    if (newValue === "" || newValue === "0" || /^\d+$/.test(newValue)) {
      setCustomAmount(newValue);
    }
  };

  const totalDonationAmount = selectedDonations.reduce(
    (acc, curr) => acc + curr.amount,
    Number(customAmount),
  );

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
            <Labelstyle>
              Or, Donation of your choice:-
              <Input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
            </Labelstyle>
            <TableFoot>
              <TableCell>Total Donation Amount :- </TableCell>
              <TableCell>₹{totalDonationAmount} </TableCell>
            </TableFoot>
            <div className="container">
              <button
                type="submit"
                onClick={checkoutHandler}
                className="btn btn-primary btn-block"
              >
                Pay with Razorpay
              </button>
            </div>
          </form>
        </Container>
      </Wrapper>
      <PageWrapper>
        <CardStyle>
          <CardContentStyle>
            <TypoGraphyMain>YES BANK</TypoGraphyMain>
            <TableWrapper>
              {yesBankAccountInfo.map((info) => (
                <CopiedTableRow label={info.label} value={info.value} />
              ))}
            </TableWrapper>
          </CardContentStyle>
        </CardStyle>
        <CardStyle>
          <CardContentStyle>
            <TypoGraphyMain>ICICI BANK</TypoGraphyMain>
            <TableWrapper>
              {iciciBankAccountInfo.map((info) => (
                <CopiedTableRow label={info.label} value={info.value} />
              ))}
            </TableWrapper>
          </CardContentStyle>
        </CardStyle>
        <CardStyle>
          <CardContentStyle>
            <TypoGraphyMain>{maintitle}</TypoGraphyMain>
            <TypoGraphy>{subtitle1}</TypoGraphy>
            <TypoGraphy>{subtitle2}</TypoGraphy>
            <CardMediaStyle image={BarCode} />
          </CardContentStyle>
        </CardStyle>
      </PageWrapper>
    </>
  );
};
