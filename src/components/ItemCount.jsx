import { useState } from 'react';
import '../css/ItemCount.css'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)
    const disminuir = () => {
        setCount(count - 1);
    }

    const incrementar = () =>{
        setCount(count + 1);
    }

    return(
        <div className="counter text-center">       
            <button disabled={count <= 1} onClick={disminuir} className='botonSumarYRestar'>
                <i class="fa-solid fa-minus"></i>
            </button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={incrementar} className='botonSumarYRestar'>
                <i class="fa-solid fa-plus"></i>
            </button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className="btn btn-danger">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;