import React, { useState } from "react";
import {
  CloseButton,
  FormButton,
  FormInput,
  FormLabel,
  FormTextArea,
  ModalContent,
  ModalWrapper,
} from "./DonationFormStyle";

export const DonationForm: React.FC<{
  onClose: () => void;
  onSubmit: (formData: any) => void;
}> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const [isFormOpen, setIsFormOpen] = useState(true); // Manage the form open state

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.name && formData.mobile && formData.email && formData.address) {
      onSubmit(formData);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        address: "",
      });
      setIsFormOpen(false); // Close the form after submitting
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
    onClose();
  };

  return (
    <ModalWrapper isOpen={isFormOpen}>
      <ModalContent>
        <CloseButton onClick={closeForm}>&times;</CloseButton>
        <h2>Donation Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="mobile">Mobile Number:</FormLabel>
            <FormInput
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="address">Address:</FormLabel>
            <FormTextArea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleTextareaChange}
              required
            />
          </div>
          <FormButton type="submit">Submit</FormButton>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
};
