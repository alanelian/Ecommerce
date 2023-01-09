import { Link } from "react-router-dom";

const Item = ({ data }) => {
    return (
        <div className="card col-sm-6 col-md-4 col-lg-3 bg-dark listContainer">
            <img src={data.imagen} className="card-img-top" alt={data.nombre} />
            <div className="card-body">
                <h6 className="card-title text-light">{data.nombre}</h6>
                <p className="card-text text-light">Precio: ${data.precio}</p>
                <Link to={`/detalle/${data.id}`} className="btn btn-danger">Comprar</Link>
            </div>
        </div>
    )
}

export default Item;