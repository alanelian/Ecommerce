import CartContext from "../context/CartContext";
import { useContext } from "react";
import ItemCart from "./ItemCart";
import LoaderCart from "./LoaderCart";
import '../css/ItemCart.css'
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    return (
        <>
            {
                cart.length === 0 ? <LoaderCart></LoaderCart>
                    :
                    <>
                    <div className="containerCart">
                        {cart.map((product) => <ItemCart key={product.id} product={product} />)}
                        <p className="totalCart"> Total compra: ${totalPrice()} </p>
                        <div className="buttonsCart">
                            <Link to="/checkout" className="btn btn-danger finalizar">Finalizar compra</Link>
                            <button className="btn btn-danger" onClick={() => clearCart()}>Eliminar todos los productos</button>
                        </div>
                        </div>
                    </>
            }
        </>
    )
}

export default Cart;