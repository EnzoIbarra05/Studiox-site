import "./Navbar.css"
function Navbar(){
    return(
        <>
        
        <div className="navbar_container">
            <div className="navbar_logo">
                <h1><span className="logo_x">X</span>STUDIOX</h1>
            </div>
            <div className="navbar_seccion">
                
                    <a href="#hero">INICIO</a>
                    <a href="#galery">GALERIA</a>
                    <a href="#team">EQUIPO</a>
                    <a href="#product">PRODUCTOS</a>
                    <a href="#location">CONTACTO</a>
                
            </div>
            <div className="navbar_reserve">
                <a href="https://www.tuturno.io/studiox1?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnvfNDGHdUvtxr4FguSWUP5pT6SZLqXGG6a3K_yMFkFGP7CaM8eLOtlDuQ0wc_aem_EN67ksMKR7z51xHiIM9MnA" target="_blank"
                rel="noopener noreferrer"><button>RESERVAR CITA</button></a>
            </div>
        </div>
        
        </>
    )
}

export default Navbar;