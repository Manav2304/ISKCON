import { donationContact, contentNumber } from "./constant";

export const handleWhatsAppMessage = () => {
  const message = encodeURIComponent(donationContact);
  const url = `https://wa.me/${contentNumber}?text=${message}`;
  window.open(url, "_blank");
};
