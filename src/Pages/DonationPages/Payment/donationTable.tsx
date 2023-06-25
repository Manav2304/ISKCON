import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  DonationHeader,
} from "./style";
import { server } from "../../../server";
import { DonationCategory } from "./constant";

type Donation = {
  id: number;
  title: string;
  amount: number;
};

export const Payment: React.FC<{ donationCategories: DonationCategory[] }> = ({
  donationCategories,
}) => {
  const [selectedDonations, setSelectedDonations] = useState<Donation[]>([]);
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [mobileNumber] = useState<string>("");
  const [email] = useState<string>("");
  const [name, setName] = useState("");
  const [, setAmount] = useState<number>(0);

  const handlePaymentSuccess = async (response: any): Promise<void> => {
    try {
      const bodyData = new FormData();
      bodyData.append("response", JSON.stringify(response));

      await axios({
        url: `${server}/razorpay/payment/success/`,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          console.log("Everything is OK!");
          setName("");
          setAmount(0);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const showRazorpay = async (): Promise<void> => {
    const bodyData = new FormData();
    bodyData.append("totalDonationAmount", totalDonationAmount.toString());
    bodyData.append("name", name);

    const data = await axios({
      url: `${server}/razorpay/pay/`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: bodyData,
    }).then((res) => {
      return res;
    });

    const options = {
      key_id: process.env.REACT_APP_PUBLIC_KEY!,
      key_secret: process.env.REACT_APP_SECRET_KEY!,
      amount: data.data.payment.amount,
      currency: "INR",
      name: "ISKCON",
      description: "Test transaction",
      order_id: data.data.payment.id,
      handler: function (response: any): void {
        handlePaymentSuccess(response);
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleDonationSelect = (donation: Donation) => {
    if (selectedDonations.find((d) => d.id === donation.id)) {
      setSelectedDonations((prevState) =>
        prevState.filter((d) => d.id !== donation.id)
      );
    } else {
      setSelectedDonations((prevState) => [...prevState, donation]);
    }
  };

  const handleCustomAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomAmount(Number(event.target.value));
  };

  const totalDonationAmount = selectedDonations.reduce(
    (acc, curr) => acc + curr.amount,
    customAmount
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submit", {
      name,
      mobileNumber,
      email,
      selectedDonations,
      customAmount,
      totalDonationAmount,
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
                <DonationHeader>{category.title}</DonationHeader>
                {category.donations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={
                          selectedDonations.find((d) => d.id === donation.id)
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
            <TableRow>
              <TableCell colSpan={2}>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </tbody>
          <tfoot>
            <TableRow>
              <TableCell>Total Donation Amount</TableCell>
              <TableCell></TableCell>
              <TableCell>₹{totalDonationAmount} </TableCell>
            </TableRow>
          </tfoot>
        </Table>
        <div className="container" style={{ marginTop: "20vh" }}>
          <button onClick={showRazorpay} className="btn btn-primary btn-block">
            Pay with Razorpay
          </button>
        </div>
      </form>
    </Container>
  );
};
