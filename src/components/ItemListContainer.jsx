import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from './Loader'
import '../css/ItemListContainer.css'

const ItemListContainer = () => {
    
    const [prods, setProds] = useState([]);

    const {categoriaId} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const collectionRef = collection(db, 'products')
        if(categoriaId) {
        const filterRef = query(collectionRef, where('categoria', '==', categoriaId))
        getDocs(filterRef)
            .then(response => setProds(response.docs.map((producto)=>{
                return (
                    {
                        id: producto.id, ...producto.data()
                    }
                )
            })))} else {
                getDocs(collectionRef)
            .then(response => setProds(response.docs.map((producto)=>{
                return (
                    {
                        id: producto.id, ...producto.data()
                    }
                )
            })))
            }
    },[categoriaId])
    
    return (
        <>
        {
        prods ? <div className="container">
            <div className="row">
            <ItemList prods={prods}/>
            </div>
        </div> : <Loader></Loader>
        
        }
        </>
    )
}

export default ItemListContainer;