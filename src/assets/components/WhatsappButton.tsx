import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

function WhatsappButton() {
  return (
    <a
      href="https://wa.link/xi3nzi"
      className="whatsapp_button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;