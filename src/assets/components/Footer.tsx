import "./Footer.css"
import instagram from  "./../../../public/img/igrey.png"
import facebook  from "./../../../public/img/fgrey.png"
import whatsapp  from "./../../../public/img/wgrey.png"

export default function Footer() {
    return(<>
        <div className="footer_container">
            <div className="footer_separation">
                <div className="footer_top">
                 <h1><span className="logo_x">X</span>STUDIOX</h1>
                 <p>BARBERIA E IMAGEN</p>
                 <div className="footer_redes">
                    <a href=""><div className="icono"><img src={instagram} alt="" /></div></a>
                    <a href=""><div className="icono"><img src={facebook} alt="" /></div></a>
                    <a href=""><div className="icono"><img src={whatsapp} alt="" /></div></a>
                 </div>
            </div>
           
        </div>
         <div className="footer_bottom">
             <div className="footer_derechos"><p>© 2026 STUDIOX. Todos los derechos reservados.</p></div>
             <div className="footer_calle"><p>Calle Mayor 24 · 28013 Madrid</p></div>
            </div>
        </div>
        </>)
}