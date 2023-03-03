import React, { useState } from "react";
import { DonationForm } from "./style";
import { InputGroup } from "./style";
import { InputLabel } from "./style";
import { InputField } from "./style";
import { SubmitButton } from "./style";
import { PageBackground } from "./style";

interface DonationFormData {
  name: string;
  email: string;
  amount: number;
}

const DonationPage: React.FC = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    name: "",
    email: "",
    amount: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Add Cashfree API integration here to process the payment

    console.log("Submitting form data:", formData);
  };

  return (
    <PageBackground>
      <div className="manav">
        <div className="conatainer ">
          <h1>Donate to our Cause</h1>
          <DonationForm onSubmit={handleSubmit}>
            <InputGroup>
              <InputLabel>Name:</InputLabel>
              <InputField
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </InputGroup>
            <InputGroup>
              <InputLabel>Email:</InputLabel>
              <InputField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </InputGroup>
            <InputGroup>
              <InputLabel>Amount:</InputLabel>
              <InputField
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
            </InputGroup>
            <SubmitButton type="submit">Donate Now</SubmitButton>
          </DonationForm>
        </div>
      </div>
    </PageBackground>
  );
};

export default DonationPage;
