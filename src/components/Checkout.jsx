import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext } from "react";
import CartContext from "../context/CartContext";
import Form from './Form'
import { useState } from 'react';
import '../css/Checkout.css'
import LoaderOrderBuy from './LoaderOrderBuy';

const Checkout = () =>{
    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const [personalData, setPersonalData] = useState(false)
    const [infoBuyer, setDatosCompra] = useState({})

    const completoDatos = (name, telefono, email, emailConfirm, localidad, direccion, apellido ) =>{
        setDatosCompra({name, telefono, email, emailConfirm, localidad, direccion, apellido})
        setPersonalData(true)
    }

    const order = {
        buyer: infoBuyer,
        items: cart,
        total: totalPrice(),
        date: new Date()
    }

    const handleClick = () =>{
        const db = getFirestore();
        const orderCollectionRef = collection(db, 'orders')
        addDoc(orderCollectionRef, order)
            clearCart();
    }
    return(
        <>
        {
            cart.length === 0 ? <LoaderOrderBuy/>
            :
            <>
            <h1 className='text-center'>Checkout</h1>
            <Form completoDatos={completoDatos}></Form>
            {
                    personalData
                    ?<button onClick={handleClick} className="d-grid mx-auto btn btn-success generarOrden">Generar orden</button>
                    : ""
                }
                </>
        }
        </>
    )
}

export default Checkout;