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
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <>
      <div>
        {token ? <><Header setToken={setToken} />

          <Routes>
            <Route path="/" exact element={<ProductList />} />
            <Route path="/product/:productID" element={<ProductDetails />} />
            <Route path="/checkout/" element={<Checkout />} />
          </Routes>
        </> :
          <Login token={token} setToken={setToken} />}
      </div>
    </>
  );
}

export default App;
