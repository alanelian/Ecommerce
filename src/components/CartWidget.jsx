import CartContext from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const { productosTotal } = useContext(CartContext)
    return(
        <i className="bi bi-cart2">{productosTotal() || ""}</i>
    )
}

export default CartWidget;