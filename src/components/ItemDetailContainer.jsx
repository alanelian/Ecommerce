import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const productos = [{
    "id": 1,
    "nombre": "Missouri 3.0",
    "imagen": "https://pedidos.masdelivery.com/panel/images/dishes/1488/423491/big.jpg",
    "categoria": "hamburguesas",
    "descripcion": "Triple carne, sextuple cheddar, incluye papas fritas.",
    "precio": 1350
},
{
    "id": 2,
    "nombre": "Missouri 2.0",
    "imagen": "https://pedidos.masdelivery.com/panel/images/dishes/1488/423490/big.jpg",
    "categoria": "hamburguesas",
    "descripcion": "Doble carne, cuadruple cheddar, incluye papas fritas.",
    "precio": 1120
},
{
    "id": 3,
    "nombre": "Texas 3.0",
    "imagen": "https://pedidos.masdelivery.com/panel/images/dishes/1488/423494/big.jpg",
    "categoria": "hamburguesas",
    "descripcion": "Triple carne , sextuple cheddar, cebolla caramelizada, bacon, barbacoa, incluye papas fritas.",
    "precio": 1450
},
{
    "id": 4,
    "nombre": "Montana 3.0",
    "imagen": "https://pedidos.masdelivery.com/panel/images/dishes/1488/423497/big.jpg",
    "categoria": "hamburguesas",
    "descripcion": "Triple carne, sextuple cheddar, cebolla, tomate, lechuga, incluye papas fritas.",
    "precio": 1400
},
{
    "id": 5,
    "nombre": "Porcion de Papas",
    "imagen": "https://arc-anglerfish-arc2-prod-artear.s3.amazonaws.com/public/REMLSRDHOUEVF5GBWTNUHH7APY.jpg",
    "categoria": "papas-fritas",
    "descripcion": "Porcion extra de papas fritas",
    "precio": 600
    
},
{
    "id": 6,
    "nombre": "Porcion de Papas con Cheddar",
    "imagen": "https://rojoynegro.com.ar/pedidos/wp-content/uploads/2020/10/1137453-1598976356395.jpg",
    "categoria": "papas-fritas",
    "descripcion": "Porcion extra de papas fritas con cheddar",
    "precio": 700
},
{
    "id": 7,
    "nombre": "Porcion de Papas con Cheddar y Bacon",
    "imagen": "https://betos.com.ar/wp-content/uploads/2019/09/papas-con-cheddar-y-bacon.png",
    "categoria": "papas-fritas",
    "descripcion": "Porcion extra de papas fritas con cheddar y bacon",
    "precio": 800
},
{
    "id": 8,
    "nombre": "Pepsi",
    "imagen": "https://molti.com.ar/wp-content/uploads/2020/11/Diapositiva1-13.jpg",
    "categoria": "bebidas",
    "descripcion": "Lata 354 ml",
    "precio": 200
},
{
    "id": 9,
    "nombre": "Mirinda",
    "imagen": "https://images.rappi.com.ar/products/783743618569_cramwhwkfyac_705964264134_fjwvjzriuvhh_156335_1.jpeg",
    "categoria": "bebidas",
    "descripcion": "Lata 354 ml",
    "precio": 200
},
{
    "id": 10,
    "nombre": "7 up",
    "imagen": "https://circuloitaliano.ar/wp-content/uploads/2021/03/Diseno-sin-titulo-39.jpg",
    "categoria": "bebidas",
    "descripcion": "Lata 354 ml",
    "precio": 200
},
{
    "id": 11,
    "nombre": "Coca-Cola",
    "imagen": "https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/fotos/b/0000000000/1556_1.jpg",
    "categoria": "bebidas",
    "descripcion": "Lata 220 ml",
    "precio": 200
},
{
    "id": 12,
    "nombre": "Agua Mineral",
    "imagen": "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040033_f.jpg",
    "categoria": "bebidas",
    "descripcion": "Eco de los Andes 500 ml",
    "precio": 200
}
]

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {detalleId} = useParams();
    useEffect(()=>{
        const getData = new Promise(resolve =>{
                resolve(productos)
        });

        getData.then(response=> setData(response.find(producto => producto.id === parseInt(detalleId))))
    },[detalleId])
    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;