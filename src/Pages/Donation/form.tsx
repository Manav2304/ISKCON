import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Form, Label, Input, Button } from "./style";

const DonationFormPage: React.FC = () => {
  const location = useLocation();
  const { selectedItems, totalAmount } = location.state || {};

  return (
    <Container>
      <h2>Donation Form</h2>
      {selectedItems && totalAmount && (
        <div>
          <p>Selected Items: {selectedItems.join(", ")}</p>
          <p>Total Amount: {totalAmount}</p>
        </div>
      )}
      <Form>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" />

        <Label htmlFor="mobile">Mobile Number:</Label>
        <Input type="text" id="mobile" name="mobile" />

        <Label htmlFor="email">Email Address:</Label>
        <Input type="email" id="email" name="email" />

        <Button type="submit">Donate Now</Button>
      </Form>
    </Container>
  );
};

export default DonationFormPage;
