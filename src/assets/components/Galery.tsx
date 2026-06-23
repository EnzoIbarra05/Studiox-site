import "./Galery.css"

function Galery(){
    return( 
    <>
    <div className="galery_container">
        <div className="galery_pretitle">
            <p>NUESTRO TRABAJO </p>
        </div>
        <div className="galery_title">
            <h1>GALERIA DEL ESTUDIO</h1>
            <p>Una muestra de los cortes, afeitados y el ambiente que define a STUDIOX. Cada detalle cuenta para conseguir tu mejor imagen.</p>
        </div>
        <div className="galery_images">
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
    </>
    )
}

export default Galery;