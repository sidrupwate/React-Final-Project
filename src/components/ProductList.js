import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import setProducts from "../redux/actions/productActions";
import axios from "axios";
import Footer from "./Footer";
// import Carousels from "./Carousels";

const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log("Products: ", products);
    return (
        <>
            {/* <Carousels /> */}
            <div className="products-container">
                <ProductComponent />
            </div>
            <Footer />
        </>
    )
}

export default ProductList;