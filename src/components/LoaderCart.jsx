import { Link } from "react-router-dom";
import '../css/Loader.css'

const LoaderCart = () => {
    return(
        <div className="div">
            <h2 className="text-light">No hay productos en el carrito</h2>
            <Link to="/" className="btn btn-warning">Hacer compra</Link>
        </div>
    )
}

export default LoaderCart;