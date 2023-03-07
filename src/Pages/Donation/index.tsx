import React, { useState } from "react";
import {
  Container,
  Title,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Button,
} from "./style";
import { DONATION_OPTIONS } from "./constant";

type Donation = {
  id: number;
  title: string;
  amount: number;
};

const DonationPage: React.FC = () => {
  const [selectedDonations, setSelectedDonations] = useState<Donation[]>([]);
  const [customAmount, setCustomAmount] = useState<number>(0);

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
      selectedDonations,
      customAmount,
      totalDonationAmount,
    });
  };

  return (
    <Container>
      <Title>Donate Now</Title>
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
            {DONATION_OPTIONS.map((donation) => (
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
                <TableCell>{donation.amount} ra per month</TableCell>
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
              <TableCell>{totalDonationAmount} ra per month</TableCell>
            </TableRow>
          </tfoot>
        </Table>
        <Button type="submit">Donate Now</Button>
      </form>
    </Container>
  );
};

export default DonationPage;
