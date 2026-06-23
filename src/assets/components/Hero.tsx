import "./Hero.css"
import tijeras from "./../../../public/img/tijeras.png"
import ubicacion from "./../../../public/img/ubicacion.png"
import estrella from "./../../../public/img/estrella-blanca.png"
function Hero (){
    return(<>
    <div className="hero_container">
    <div className="hero_pretitle">
        <img src={tijeras} alt="" />
        <h5>BARBERIA E IMAGEN</h5>
    </div>
    <div className="hero_title">
        <h1>ESTILO CLÁSICO,<br /><span className="precision">PRECISIÓN</span> <br />MODERNA</h1>
    </div>
    <div className="hero_paragraph"> <p>En STUDIOX combinamos la tradición de la barbería de siempre con técnicas y diseño de vanguardia. Cortes, afeitado y cuidado masculino para que luzcas tu mejor imagen.</p></div>
    <div className="hero_buttons">
        <button className="hero_button1">RESERVAR CITA</button>
        <button className="hero_button2">CONOCE AL EQUIPO</button>
    </div>
    <div className="hero_cuality">
        <div className="hero_cuality_container">
            <div className="hero_icons">
            <img src={estrella} alt="" /> 
            </div>
            <div className="hero_info">
                <h1>4.9</h1>
                <p>VALORACION MEDIA</p>
            </div>
        </div>
        <div className="hero_cuality_container">
          <div className="hero_icons">
            <img src={tijeras} alt="" /> 
            </div>
            <div className="hero_info">
                <h1>12+</h1>
                <p>AÑOS DE OFICIO</p>
            </div>
        </div>
        <div className="hero_cuality_container">
        <div className="hero_icons">
            <img src={ubicacion} alt="" /> 
            </div>
            <div className="hero_info">
                <h1>Centro</h1>
                <p>CALLE MAYOR 24</p>
            </div>
        </div>
    </div>
    </div>
    
    </>)
}

export default Hero;