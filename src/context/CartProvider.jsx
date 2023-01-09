import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const limpiarCarrito = () => setCarrito([]);

    const eliminarProducto = (id) => setCarrito(carrito.filter(producto => producto.id !== id));

    const agregarProducto = (producto, newQuantity) => {
        const newCarrito = carrito.filter((prod) => prod.id !== producto.id);
        newCarrito.push({...producto, quantity: newQuantity});
        setCarrito(newCarrito);
    }

    const precioTotal = () => {
        return carrito.reduce((acumulador,precioTotal) => acumulador + precioTotal.quantity * precioTotal.precio,0)
    }

    const productosTotal = () => {
        return carrito.reduce ((acumulador1,productoActual) => acumulador1 + productoActual.quantity,0)
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
            limpiarCarrito,
            eliminarProducto,
            agregarProducto,
            precioTotal,
            productosTotal,
            carrito,
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
            setCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;