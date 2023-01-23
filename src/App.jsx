import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart"
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Category from './components/Category'
import './App.css' 
import ItemList from './components/ItemList'
import ItemDetail from "./components/ItemDetail";


function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemList/>}/>
        <Route path="/category" element={<ItemList/>}/>
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<ItemDetail/>}/>
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
