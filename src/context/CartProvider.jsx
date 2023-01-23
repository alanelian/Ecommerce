import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const deleteProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const isInCart = (id) => {
        cart.some(product => product.id === id);
    }
    const addProduct = (product, quantity) => {
        if(isInCart(product.id)){
            setCart(cart.map(item => {
                return item.id === product.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, {...product, quantity}])
        }
    }

    const totalPrice = () => {
        return cart.reduce((acumulador,totalPrice) => acumulador + totalPrice.quantity * totalPrice.precio,0)
    }

    const totalProducts = () => {
        return cart.reduce ((acumulador,productAcu) => acumulador + productAcu.quantity,0)
    }

    const [name, setName] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [telefono, setTelefono] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [direccion, setDireccion] = useState("");

    return(
        <CartContext.Provider value={{
            clearCart,
            deleteProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart,
            setName,
            setApellido,
            setEmail,
            setEmailConfirm,
            setTelefono,
            setLocalidad,
            setDireccion,
            name,
            apellido,
            email,
            emailConfirm,
            telefono,
            localidad,
            direccion,
            setCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;