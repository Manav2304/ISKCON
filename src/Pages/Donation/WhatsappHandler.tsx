import { contentNumber } from "./constant";

export const handleWhatsAppMessage = () => {
  const url = `https://wa.me/${contentNumber}`;
  window.open(url, "_blank");
};
