import "./Navbar.css"
function Navbar(){
    return(
        <>
        <div className="navbar_container">
            <div className="navbar_logo">
                <h1><span className="logo_x">X</span>STUDIOX</h1>
            </div>
            <div className="navbar_seccion">
                
                    <a href="">INICIO</a>
                    <a href="">GALERIA</a>
                    <a href="">EQUIPO</a>
                    <a href="">PRODUCTOS</a>
                    <a href="">CONTACTO</a>
                
            </div>
            <div className="navbar_reserve">
                <button>RESERVAR CITA</button>
            </div>
        </div>
        </>
    )
}

export default Navbar;