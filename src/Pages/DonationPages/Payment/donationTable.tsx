import React, { useImperativeHandle, useState } from "react";
import axios from "axios";
import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  DonationHeader,
  Wrapper,
  INPUT,
} from "./style";
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

  const totalDonationAmount = selectedDonations.reduce(
    (acc, curr) => acc + curr.amount,
    customAmount,
  );

  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/donate", { amount, name, email });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
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
                <TableCell>
                  <INPUT
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
          {/* handle payment */}
          <div className="container" style={{ marginTop: "20vh" }}>
            <button type="submit" className="btn btn-primary btn-block">
              Pay with Razorpay
            </button>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
};
