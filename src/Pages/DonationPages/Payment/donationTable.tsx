import React, { useState } from "react";
import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  DonationHeader,
} from "./style";

type Donation = {
  id: number;
  title: string;
  amount: number;
};

type DonationCategory = {
  title: string;
  donations: Donation[];
};

type PaymentProps = {
  donationCategories: DonationCategory[];
};

export const Payment: React.FC<PaymentProps> = ({ donationCategories }) => {
  const [name, setName] = useState("");
  const [mobileNumber] = useState("");
  const [email] = useState("");
  const [selectedDonations, setSelectedDonations] = useState<Donation[]>([]);
  const [customAmount, setCustomAmount] = useState<number>(0);

  const handlePaymentSuccess = async (response: any): Promise<void> => {
    // Handle payment success logic
  };

  const showRazorpay = async (): Promise<void> => {
    // Show Razorpay payment gateway
  };

  const handleDonationSelect = (donation: Donation) => {
    // Handle donation selection
  };

  const handleCustomAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const DonationTable: React.FC = () => (
    <Table>
      {donationCategories.map((category) => (
        <React.Fragment key={category.title}>
          <thead>
            <tr>
              <TableHeader>Select</TableHeader>
              <TableHeader>Donation</TableHeader>
              <TableHeader>Amount</TableHeader>
            </tr>
          </thead>
          <tbody>
            {category.donations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    checked={selectedDonations.find((d) => d.id === donation.id) ? true : false}
                    onChange={() => handleDonationSelect(donation)}
                  />
                </TableCell>
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
              <TableCell>₹{totalDonationAmount}</TableCell>
            </TableRow>
          </tfoot>
        </React.Fragment>
      ))}
    </Table>
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <DonationTable />
        <div className="container" style={{ marginTop: "20vh" }}>
          <button onClick={showRazorpay} className="btn btn-primary btn-block">
            Pay with Razorpay
          </button>
        </div>
      </form>
    </Container>
  );
};
