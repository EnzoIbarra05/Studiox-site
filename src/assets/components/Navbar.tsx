import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="navbar_container">

            <div className="navbar_logo">
                <h1><span className="logo_x">X</span>STUDIOX</h1>
            </div>

            <div className={`navbar_seccion ${menuOpen ? "active" : ""}`}>

                <a href="#hero" onClick={() => setMenuOpen(false)}>INICIO</a>
                <a href="#galery" onClick={() => setMenuOpen(false)}>GALERÍA</a>
                <a href="#team" onClick={() => setMenuOpen(false)}>EQUIPO</a>
                <a href="#product" onClick={() => setMenuOpen(false)}>PRODUCTOS</a>
                <a href="#location" onClick={() => setMenuOpen(false)}>CONTACTO</a>

                <a
                    href="https://www.tuturno.io/studiox1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>RESERVAR CITA</button>
                </a>

            </div>

            <div
                className="menu_icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {
                    menuOpen
                    ? <FaTimes/>
                    : <FaBars/>
                }
            </div>

        </div>
    );
}

export default Navbar;