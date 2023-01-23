import CartContext from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext)
    return(
        <i className="bi bi-cart2 cartIcon">{totalProducts()}</i>
    )
}

export default CartWidget;