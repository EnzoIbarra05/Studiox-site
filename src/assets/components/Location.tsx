import "./Location.css"
import ubication from "./../../../public/img/ubicacion.png"
import telephone from "./../../../public/img/llamar.png"
import email from "./../../../public/img/email.png"
import reloj from "./../../../public/img/reloj.png";
import { useInView } from "react-intersection-observer";
export default function Location(){
    const { ref, inView } = useInView({
    triggerOnce: true, // solo una vez
    threshold: 0.2     // 20% visible
  });
return(
<>
<section id="location">
<div className="location_container">
<div className="location_pretitle"><p ref={ref}
      className={
        inView
          ? "animate__animated animate__slideInLeft"
          : "hidden"
      }>VISITANOS</p></div>
<div className="location_title"><h1
ref={ref}
      className={
        inView
          ? "animate__animated animate__slideInLeft"
          : "hidden"
      }>UBICACION Y CONTACTO</h1></div>
<div className="location_first">
    <div className="location_info">
        <div className="location_hours">
            <div className="direccion_telefono">
                 <div className="location_direccion">
                 <div className="ico"><img src=
                 {ubication} alt="" /><h3>DIRECCION</h3></div>
                 <p>Calle Mayor 24, Bajo <br />28013 Madrid, España</p>
                 </div>           
                 <div className="location_telephone">
                <div className="ico"> <img src={telephone} alt="" /><h3>TELEFONO</h3></div>
                    <p>2616274027</p></div>
             </div>
             <div className="mail_horario">
                 <div className="location_email">
                    <div className="ico"> <img src={email} alt="" /><h3>EMAIL</h3></div>
                    <p>hola@studiox.com.ar</p></div>
                 <div className="location_horario">
                    <div className="ico"> <img src={reloj} alt="" /><h3>HORARIO</h3></div>
                    <p>El horario varia segun ganas</p></div>
             </div>
        </div>
        <div className="location_contact">
        <h1><span className="logo_x">X</span>STUDIOX</h1>
        </div>
    </div>
    <div className="location_map">
       <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.0895334906177!2d-68.85786828849166!3d-32.89580097350409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09a65b640e91%3A0x26fa8d72807efe89!2sStudio%20X!5e0!3m2!1ses-419!2sar!4v1782737524978!5m2!1ses-419!2sar"
            width="100%"
            height="544px"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin">
       </iframe>
    </div>
</div>
</div>
</section>
</>)

}