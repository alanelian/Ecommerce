import CartContext from "../context/CartContext";
import { useContext } from "react";
import ItemCart from "./ItemCart";
import LoaderCart from "./LoaderCart";
import '../css/ItemCart.css'
import { Link } from "react-router-dom";

const Cart = () => {

    const { carrito, precioTotal, limpiarCarrito } = useContext(CartContext);

    return (
        <>
            {
                carrito.length === 0 ? <LoaderCart></LoaderCart>
                    :
                    <>
                        {carrito.map((producto) => <ItemCart key={producto.id} producto={producto} />)}
                        <p className="totalCart"> Total compra: ${precioTotal()} </p>
                        <div className="buttonsCart">
                            <Link to="/checkout" className="btn btn-danger finalizar">Finalizar compra</Link>
                            <button className="btn btn-danger" onClick={() => limpiarCarrito()}>Eliminar todos los productos</button>
                        </div>
                    </>
            }
        </>
    )
}

export default Cart;