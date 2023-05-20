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
import { ADOPT_A_COW, ANNA_DAAN, FEED_COWS, VAISHNAV_BHOJAN } from "./constant";
import { server } from "../../../server";

type Donation = {
  id: number;
  title: string;
  amount: number;
};

export const Payment: React.FC = () => {
  const [selectedDonations, setSelectedDonations] = useState<Donation[]>([]);
  const [customAmount, setCustomAmount] = useState<number>(0);
  // const [name, setName] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // const navigate = useNavigate();

  // const handleDonateNow = () => {
  //   // Perform any necessary actions when the button is clicked
  //   console.log("Donate Now button clicked");
  //   // Additional code...
  //   // Navigate to the Form page/component
  //   navigate("./Form");
  // };
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number>(0);

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
        .then((res) => {
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

  const loadScript = (): void => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async (): Promise<void> => {
    const res = await loadScript();

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
        prevState.filter((d) => d.id !== donation.id),
      );
    } else {
      setSelectedDonations((prevState) => [...prevState, donation]);
    }
  };

  const handleCustomAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCustomAmount(Number(event.target.value));
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleMobileNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMobileNumber(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const totalDonationAmount = selectedDonations.reduce(
    (acc, curr) => acc + curr.amount,
    customAmount,
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
        {/* 1st table */}
        <Table>
          <thead>
            <DonationHeader>Feed Cows</DonationHeader>
            <tr>
              <TableHeader>Select</TableHeader>
              <TableHeader>Donation</TableHeader>
              <TableHeader>Amount</TableHeader>
            </tr>
          </thead>
          <tbody>
            {FEED_COWS.map((donation: { id: any; title: any; amount: any }) => (
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
        {/* 2ed table */}
        <Table>
          <thead>
            <DonationHeader>Adopt a Cow</DonationHeader>
            <tr>
              <TableHeader>Select</TableHeader>
              <TableHeader>Donation</TableHeader>
              <TableHeader>Amount</TableHeader>
            </tr>
          </thead>
          <tbody>
            {ADOPT_A_COW.map(
              (donation: { id: any; title: any; amount: any }) => (
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
                  <TableCell>₹{donation.amount}</TableCell>
                </TableRow>
              ),
            )}
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
              <TableCell>₹{totalDonationAmount}</TableCell>
            </TableRow>
          </tfoot>
        </Table>
        {/* 3rd table */}
        <Table>
          <thead>
            <DonationHeader>Anna Daan</DonationHeader>
            <tr>
              <TableHeader>Select</TableHeader>
              <TableHeader>Donation</TableHeader>
              <TableHeader>Amount</TableHeader>
            </tr>
          </thead>
          <tbody>
            {ANNA_DAAN.map((donation: { id: any; title: any; amount: any }) => (
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
                <TableCell>₹{donation.amount}</TableCell>
              </TableRow>
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
        {/* 4th table */}
        <Table>
          <thead>
            <DonationHeader>Vaishnav Bhojan</DonationHeader>
            <tr>
              <TableHeader>Select</TableHeader>
              <TableHeader>Donation</TableHeader>
              <TableHeader>Amount</TableHeader>
            </tr>
          </thead>
          <tbody>
            {VAISHNAV_BHOJAN.map(
              (donation: { id: any; title: any; amount: any }) => (
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
              ),
            )}
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
        {/* <Button type="submit">
          <Link to={routes.form}>Donate Now</Link>
        </Button> */}
        <div className="container" style={{ marginTop: "20vh" }}>
          <button onClick={showRazorpay} className="btn btn-primary btn-block">
            Pay with Razorpay
          </button>
        </div>
      </form>
    </Container>
  );
};