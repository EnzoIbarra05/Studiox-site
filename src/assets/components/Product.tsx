import "./Product.css"
import datas from "../../data/productos.json";
export default function Product(){
    return(<>
    <div className="product_container">
      <div className="product_pretitle"><p>LA TIENDA</p></div>
      <div className="product_title">
        <div className="title_h1"><h1>PRODUCTOS DE CALIDAD</h1></div>
        <div className="parragraph_p"><p>Llévate a casa la calidad de STUDIOX. Selección de productos premium para mantener tu imagen entre visitas.</p></div>
      </div>
          <div className="product_cards">
    {datas.map(data => (
        <div key={data.id} className="card">
          <div className="product_image"><img src={data.url} /></div>
          <div className="product_data">
          <div className="product_price">
            <h2>{data.name}</h2>
            <h3>{data.price}</h3>
          </div>
          <p>{data.description}</p>
          
          </div>
        </div>
      ))}
    </div>
    </div>
    
    
    
    </>)
}