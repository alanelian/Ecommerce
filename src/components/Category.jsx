import { getFirestore, } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProductsByCategory } from '../queries/products';
import { Link } from 'react-router-dom';

const Category = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        getProductsByCategory(db, id)
            .then((item) => {
                setCategories(item)
            })
    }, [id]);


    const renderCategorie = () => (
        <>
            {categories?.map(item => (
                <div className="card col-sm-6 col-md-4 col-lg-3 bg-dark">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <div className="card-body">
                        <h6 className="card-title text-light">{item.nombre}</h6>
                        <p className="card-text text-light">Precio: ${item.precio}</p>
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
                {renderCategorie()}
            </div>
        </div>
        </>
    )
}

export default Category;