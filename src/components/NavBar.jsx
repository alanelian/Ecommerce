import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllCategories } from "../queries/categories";
import CartWidget from "./CartWidget";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        getAllCategories(db)
            .then((item) => {
                setCategories(item)
            })
    }, []);

    const renderCategories = () => (
        <>
            {categories?.map(item => (
                <li className="nav-item">
                <NavLink to={`/category/${item.nombre}`} className="nav-link text-light" key={item?.id}>{item?.nombre}</NavLink>
            </li>
            ))} 
        </>    
    )
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Burger House</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/">Inicio</NavLink>
                                </li>
                                {renderCategories()}
                                <li className="nav-item">
                                    <NavLink className="nav-link text-dark" to="cart"><CartWidget /></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;