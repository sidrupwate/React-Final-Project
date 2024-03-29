// import { Route, Router } from "react-router-dom";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductComponent from "./components/ProductComponent";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import Login from "./components/Login";
import Footer from "./components/Footer";
// import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {

  const [token, setToken] = useState(localStorage.getItem("userToken") || null);
  return (
    <>
      <div>
        {token ? <>
          <Routes>
            <Route path="/" exact element={<ProductList setToken={setToken} />} />
            <Route path="/product/:productID" element={<ProductDetails setToken={setToken} />} />
            <Route path="/checkout" element={<Checkout setToken={setToken} />} />
          </Routes>
        </> :
          <Login token={token} setToken={setToken} />}
      </div>
    </>
  );
}

export default App;
