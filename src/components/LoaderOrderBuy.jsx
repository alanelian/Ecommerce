import { Link } from 'react-router-dom';
import '../css/Loader.css'

const LoaderOrderBuy = () => {
    return(
        <div className="div">
            <h2 className="text-light">Revisa tu correo para realizar el pago</h2>
            <Link to="/" className="btn btn-warning">Seguir comprando</Link>
        </div>
    )
}

export default LoaderOrderBuy;