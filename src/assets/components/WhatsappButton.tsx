import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5492611234567?text=Hola,%20quiero%20reservar%20un%20turno%20en%20STUDIOX."
      className="whatsapp_button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;