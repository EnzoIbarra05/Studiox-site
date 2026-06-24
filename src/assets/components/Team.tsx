import "./Team.css"
import datas from "../../data/trabajadores.json";
import flecha from "./../../../public/img/flecha-correcta.png"
import tijera from "./../../../public/img/tijeras.png"
export default function Team(){
    return(<>
    <div className="team_container">
    
    <div className="team_protitle"><p>EL EQUIPO</p></div>
    <div className="team_title"><h1>NUESTROS BARBEROS</h1></div>
    <div className="team_subtitle"><p>Profesionales apasionados por el oficio. Conoce a las manos expertas detrás de <br /> cada corte.</p></div>
    <div className="team_cards">
    {datas.map(data => (
        <div key={data.id} className="card">
          <div className="team_image"><img src={data.url} /></div>
          <div className="team_data">
          <h2>{data.name}</h2>
          <div className="function"> <img src={tijera} alt="" /><h3>{data.function}</h3></div>
          <h5>{data.tipe}</h5>
          <p>{data.description}</p>
          <div className="solicito"><a href="">solicitar turno</a> <img src={flecha} alt="" /></div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
    </>)
}