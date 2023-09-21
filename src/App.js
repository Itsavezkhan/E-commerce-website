import Products from "./pages/products";
import Navbar from "./components/navbar/Navbar";
import SingleCart from "./pages/singleCart";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Wish from "./pages/wish";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ minWidth: "0px" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wish" element={<Wish />}></Route>
          <Route path="/singlecart/:id" element={<SingleCart />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
