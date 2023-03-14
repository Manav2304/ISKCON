import React, { useState } from "react";
import { DonationForm } from "./style";
import { InputGroup } from "./style";
import { InputLabel } from "./style";
import { InputField } from "./style";
import { PageBackground } from "./style";
import axios from "axios";

const APP_ID = "33221729445f634e544edbc48c712233";
const ORDER_ID = "<YOUR_ORDER_ID>";

const DonationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDonateButtonClick = () => {
    // Generate the payment form URL using the Cashfree API
    const paymentFormUrl =
      "https://payments-test.cashfree.com/forms/Iskcondonation" +
      `?appId=${APP_ID}&orderId=${ORDER_ID}&orderAmount=${formData.amount}&orderCurrency=INR&customerName=${formData.name}&customerEmail=${formData.email}&customerPhone=9999999999`;

    // Redirect the user to the payment form URL
    window.location.href = paymentFormUrl;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if donation amount is at least 100
    if (formData.amount < 100) {
      alert("Donation amount must be at least 100");
      return;
    }

    try {
      // Send the form data to the Django backend
      await axios.post("http://localhost:8000", formData);
      console.log(formData);
      // Redirect to the payment form
      handleDonateButtonClick();
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    }
  };

  const isFormValid = formData.name && formData.email && formData.amount;

  return (
    <PageBackground>
      <div>
        <div className="conatainer ">
          <div className="m1">
            <h1>Donate to our Cause</h1>
            <DonationForm onSubmit={handleSubmit}>
              <InputGroup>
                <InputLabel>Name:</InputLabel>
                <InputField
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </InputGroup>
              <InputGroup>
                <InputLabel>Email:</InputLabel>
                <InputField
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </InputGroup>
              <InputGroup>
                <InputLabel>Amount:</InputLabel>
                <InputField
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                />
              </InputGroup>
              <button onClick={handleDonateButtonClick} disabled={!isFormValid}>
                Donate
              </button>
            </DonationForm>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default DonationPage;
