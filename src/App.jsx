import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart"
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import './App.css' 

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria" element={<ItemListContainer/>}/>
        <Route path="categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </CartProvider>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
