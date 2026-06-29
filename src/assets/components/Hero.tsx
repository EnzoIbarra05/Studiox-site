import "./Hero.css"
import tijeras from "./../../../public/img/tijeras.png"
import ubicacion from "./../../../public/img/ubicacion.png"
import estrella from "./../../../public/img/estrella-blanca.png"
import logo from "./../../../public/img/logoredondo.png"
function Hero (){
    return(<>
    <section id="hero">
    <div className="hero_container">
    <div className="hero_left">
            <div className="hero_pretitle">
                <img src={tijeras} alt="" />
                <h5>BARBERIA E IMAGEN</h5>
            </div>
        
            <div className="hero_title">
                <h1 className="h1_animado animate__animated animate__fadeIn">ESTILO CLÁSICO,<br />
                <span className="precision">PRECISIÓN</span> <br />MODERNA</h1>
            </div>
        
            <div className="hero_paragraph"> <p>En STUDIOX combinamos la tradición de 
                la barbería de siempre con técnicas y diseño de vanguardia. Cortes, 
                afeitado y cuidado masculino para que luzcas tu mejor imagen.</p>
            </div>
        
            <div className="hero_buttons">
                           <a href="https://www.tuturno.io/studiox1?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnvfNDGHdUvtxr4FguSWUP5pT6SZLqXGG6a3K_yMFkFGP7CaM8eLOtlDuQ0wc_aem_EN67ksMKR7z51xHiIM9MnA" target="_blank"
                                   rel="noopener noreferrer"><button className="hero_button1">RESERVAR CITA</button></a>
                           <a href="#team"><button className="hero_button2">CONOCE AL EQUIPO</button></a>
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
    <div className="hero_logo">
    <img src={logo} alt="" />
    </div>
    </div>
    </section>
    </>)
}

export default Hero;