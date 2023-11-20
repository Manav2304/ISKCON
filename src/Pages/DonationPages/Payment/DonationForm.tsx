import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { CloseButton, FormLabel } from "react-bootstrap";
import {
  Popup,
  PopupContent,
  FormInput,
  SubmitButton,
} from "./DonationFormStyle";
import { Donation } from "./constant";
import Logo from "../../../assets/images/iskcon-logo.png";

type DonationFormProps = {
  onClose: () => void;
  onSubmit: (formData: any, title: string) => void;
};

function loadScript(src: string): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const DonationForm: React.FC<
  DonationFormProps & {
    totalDonationAmount: number;
    selectedDonations: Donation[];
  }
> = ({ onClose, onSubmit, totalDonationAmount, selectedDonations }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    // Load Razorpay script when the component mounts
    loadRazorpayScript();
  }, []);

  const loadRazorpayScript = async () => {
    const existingScript = document.getElementById("razorpay-script");

    if (!existingScript) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js",
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
      }
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContactNumber(event.target.value);
  };

  const handleRazorpayAndSubmit = async () => {
    try {
      // Fetch the order details from the backend
      const responseRazorpay = await axios.post(
        "http://localhost:1337/orders",
        {
          amount: totalDonationAmount,
        },
      );

      const dataRazorpay = responseRazorpay.data;

      console.log("Razorpay response data:", dataRazorpay);

      const options = {
        key: "rzp_test_4twsScIlfpBGfM",
        currency: dataRazorpay.currency,
        amount: dataRazorpay.amount.toString(),
        order_id: dataRazorpay.order_id,
        name: "Donation",
        description: "Thank you for nothing. Please give us some money",
        image: Logo,
        handler: async (response: any) => {
          // Handle Razorpay success
          alert("Transaction successful");

          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          const formData: {
            name: string;
            email: string;
            contactNumber: string;
            title: string;
            amount: number;
            selectedDonations: Donation[];
            razorpayData: {
              order_id: any;
              payment_id: any;
              status: string;
            };
            order_id: any; // Add this line to explicitly define order_id
          } = {
            name,
            email,
            contactNumber,
            title: "Your Title Here",
            amount: totalDonationAmount,
            selectedDonations,
            razorpayData: {
              order_id: razorpay_order_id,
              payment_id: razorpay_payment_id,
              status: "success", // Assuming it's successful, adjust as needed
              // Add other Razorpay data here if needed
            },
            order_id: razorpay_order_id, // Add this line to assign the order_id
          };

          try {
            formData.order_id = razorpay_order_id;

            const responseSave = await axios.post(
              "http://localhost:1337/donate",
              formData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );

            if (responseSave.status === 200) {
              console.log("Data saved successfully");

              // Log the Razorpay Order ID and Payment ID from the backend response
              console.log(
                "Backend Razorpay Order ID:",
                responseSave.data.orderId,
              );
              console.log(
                "Backend Razorpay Payment ID:",
                responseSave.data.paymentId,
              );

              setSubmitted(true);
              window.location.href = "/";
            } else {
              console.error("Data could not be saved");
            }
          } catch (errorSave) {
            console.error("Error while saving data:", errorSave);
          } finally {
            onClose();
          }
        },
        prefill: {
          name,
          email,
          phone_number: contactNumber,
        },
        theme: {
          color: "#ad0d0d",
        },
      };

      // Create Razorpay payment object and open it
      const paymentObject: any = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitted) {
      // If already submitted, return to avoid duplicate submissions
      return;
    }

    handleRazorpayAndSubmit();
  };

  return (
    <Popup>
      <PopupContent>
        <CloseButton onClick={onClose}></CloseButton>
        <h2>Donation Information</h2>
        <form onSubmit={handleSubmit}>
          <FormLabel>Name:</FormLabel>
          <FormInput type="text" value={name} onChange={handleNameChange} />

          <FormLabel>Email:</FormLabel>
          <FormInput type="email" value={email} onChange={handleEmailChange} />

          <FormLabel>Contact Number:</FormLabel>
          <FormInput
            type="tel"
            value={contactNumber}
            onChange={handleContactNumberChange}
          />

          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </PopupContent>
    </Popup>
  );
};
