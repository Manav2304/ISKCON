/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  Container,
  Title,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Button,
  DonationHeader,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  NameInput,
} from "./style";
import { ADOPT_A_COW, ANNA_DAAN, FEED_COWS, VAISHNAV_BHOJAN } from "./constant";
import { Link } from "react-router-dom";

type Donation = {
  id: number;
  title: string;
  amount: number;
};

const DonationPage: React.FC = () => {
  const [selectedDonations, setSelectedDonations] = useState<Donation[]>([]);
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleMobileNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMobileNumber(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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
      <Title>Donate Now</Title>
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
              )
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
              )
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
        <Button type="submit">
          <div>
            <Link to="/donate">Donate Now</Link>
          </div>
        </Button>
      </form>
    </Container>
  );
};

export default DonationPage;
