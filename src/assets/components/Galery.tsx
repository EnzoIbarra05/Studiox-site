import "./Galery.css"
import { useInView } from "react-intersection-observer";
function Galery(){
    const { ref, inView } = useInView({
    triggerOnce: true, // solo una vez
    threshold: 0.2     // 20% visible
  });
    return( 
    <>
    <section id="galery">
    <div className="galery_container">
        <div className="galery_pretitle">
            <p  ref={ref}
      className={
        inView
          ? "animate__animated animate__slideInLeft"
          : "hidden"
      }>NUESTRO TRABAJO </p>
        </div>
        <div className="galery_title">
                <h1
      ref={ref}
      className={
        inView
          ? "animate__animated animate__slideInLeft"
          : "hidden"
      }
    >
      GALERIA DEL ESTUDIO
    </h1>
            <p>Una muestra de los cortes, afeitados y el ambiente que define a STUDIOX. Cada detalle cuenta para conseguir tu mejor imagen.</p>
        </div>
        <div className="galery_images ">
            <div className="big_photo">
              
            </div>
            <div className="tree_photos">
            <div className="divisiones">
                <div className="division1"></div>
                <div className="division2"></div>
            </div>
            <div className="imagen_debajo">
            <div className="imagen_sillon"></div>
            </div>
            </div>
        </div>
    </div>
    </section>
    </>
    )
}

export default Galery;