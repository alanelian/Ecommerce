import { getFirestore } from 'firebase/firestore';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { getProductById } from '../queries/products';
import ItemCount from "./ItemCount"
import '../css/ItemDetail.css'

const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { addProduct } = useContext(CartContext);
    const [toCart, setToCart] = useState(false)

    useEffect(() => {
        const db = getFirestore();
        getProductById(db, id)
            .then((item) => {
                setProduct(item)
            })
    }, [id]);

    const onAdd = (quantity) => {
        setToCart(true)
        addProduct(product, quantity)
    }
    return (
        <div id="container">
            <div className="card col-sm-3 bg-light cardDetalle">
                <img src={product.imagen} className="card-img-top" alt={product.nombre} />
                <div className="card-body">
                    <h6 className="card-title">{product.nombre}</h6>
                    <p className="card-text">{product.descripcion}</p>
                    <p className="card-text">Precio: ${product.precio}</p>
                    {toCart ? <div className="compra"><Link to='/cart' className="btn btn-danger terminarCompra">Terminar Compra</Link> <Link to='/' className="btn btn-danger">Seguir comprando</Link></div> : <ItemCount initial={1} stock={10} onAdd={onAdd} />}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;