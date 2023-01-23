import CartContext from "../context/CartContext";
import { useContext } from "react";
import "../css/ItemCart.css"

const ItemCart = ( {product} ) => {
    const { deleteProduct } = useContext(CartContext);
    return(
        <div className="itemCart">
            <img src={product.imagen} alt={product.nombre} />
            <div>
                <p>Producto: {product.nombre}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.precio}</p>
                <p>Subtotal: {product.quantity * product.precio}</p>
                <button className="btn btn-danger text-white" onClick={() => deleteProduct(product.id)}>X</button>
            </div>
        </div>
    )
}

export default ItemCart;