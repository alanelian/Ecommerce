import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import CartContext from "../context/CartContext";
import { useContext } from "react";
import "../css/ItemDetail.css"
import Loader from './Loader'

const ItemDetail = ({ data }) => {

    const [toCart, setToCart] = useState(false)

    const {agregarProducto} = useContext(CartContext)

    const onAdd = (quantity) =>{
        setToCart(true)
        agregarProducto(data, quantity)
    }
    return(
        <>
        {data ? <div id="container">
            <div className="card col-sm-3 bg-light cardDetalle">
                <img src={data.imagen} className="card-img-top" alt={data.nombre} />
                <div className="card-body">
                    <h6 className="card-title">{data.nombre}</h6>
                    <p className="card-text">{data.descripcion}</p>
                    <p className="card-text">Precio: ${data.precio}</p>
                    {toCart? <div className="compra"><Link to='/cart' className="btn btn-danger terminarCompra">Terminar Compra</Link> <Link to='/' className="btn btn-danger">Seguir comprando</Link></div>: <ItemCount initial={1} stock={10} onAdd={onAdd}/>}
                </div>
            </div>
        </div> : <Loader/>}
        </>           
    )
}

export default ItemDetail;