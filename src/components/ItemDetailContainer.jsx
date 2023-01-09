import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {detalleId} = useParams();
    useEffect(()=>{
        const db = getFirestore();
        const Doc = doc(db, 'products', detalleId)
        getDoc(Doc)
            .then(response => setData({id: response.id, ...response.data()}))
    },[detalleId])
    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;