import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../queries/products';
import '../css/ItemListContainer.css'


const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        getAllProducts(db)
            .then((item) => {
                setProducts(item)
            })
    }, []);

    const renderProducts = () => (
        <>
            {products?.map(item => (
                <div class="card col-sm-6 col-md-4 col-lg-3 bg-dark">
                    <img src={item.imagen} class="card-img-top" alt={item.nombre} />
                    <div class="card-body">
                        <h6 class="card-title text-light">{item.nombre}</h6>
                        <p class="card-text text-light">Precio: ${item.precio}</p>
                        <Link to={`/product/${item.id}`} className="btn btn-danger">Comprar</Link>
                    </div>
                </div>
            ))}
        </>
    )
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {renderProducts()}
                </div>
            </div>
        </>
    )
}

export default ItemList;