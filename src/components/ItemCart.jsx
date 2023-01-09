import CartContext from "../context/CartContext";
import { useContext } from "react";
import "../css/ItemCart.css"

const ItemCart = ( {producto} ) => {

    const { eliminarProducto } = useContext(CartContext);
    
    return(
        <div className="itemCart">
            <img src={producto.imagen} alt={producto.nombre} />
            <div>
                <p>Producto: {producto.nombre}</p>
                <p>Cantidad: {producto.quantity}</p>
                <p>Precio: {producto.precio}</p>
                <p>Subtotal: {producto.quantity * producto.precio}</p>
                <button className="btn btn-danger text-white" onClick={() => eliminarProducto(producto.id)}>X</button>
            </div>
        </div>
    )
}

export default ItemCart;