import "./Footer.css";
import instagram from "./../../../public/img/igrey.png";
import whatsapp from "./../../../public/img/wgrey.png";

export default function Footer() {
  return (
    <footer className="footer_container">

      <div className="footer_separation">

        <div className="footer_top">

          <h1>
            <span className="logo_x">X</span>STUDIOX
          </h1>

          <p>BARBERÍA E IMAGEN</p>

          <div className="footer_redes">

            <a
              href="https://www.instagram.com/studiox.barberia?igsh=cTN1enFqZTAxaG1n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icono">
                <img src={instagram} alt="Instagram" />
              </div>
            </a>

            <a
              href="https://wa.link/xi3nzi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icono">
                <img src={whatsapp} alt="WhatsApp" />
              </div>
            </a>

          </div>

        </div>

      </div>

      <div className="footer_bottom">

        <div className="footer_derechos">
          <p>© 2026 STUDIOX. Todos los derechos reservados.</p>
        </div>

        <div className="footer_calle">
          <p>Calle Mayor 24 · 28013 Madrid</p>
        </div>

      </div>

    </footer>
  );
}