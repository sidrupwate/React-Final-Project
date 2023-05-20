import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProducts, addToCart } from "../redux/actions/productActions";
import "../styles/Styles.css";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "react-bootstrap";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, description, category } = product;
    const { productID } = useParams();
    const dispatch = useDispatch();

    const fetchProductsDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`).catch((err) => {
            console.log("Err", err);
        });
        dispatch(selectedProducts(response.data));
    };
    useEffect(() => {

        if (productID && productID !== "")
            fetchProductsDetail();
        return () => {
            dispatch(removeSelectedProducts());
        }
    }, [productID])

    const add = (e) => {
        console.log(e);
        dispatch(addToCart(e))
    }
    return (
        <div className="detailed-container">
            {Object.keys(product).length === 0 ? (
                <div><Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box></div>
            ) :


                <div className="detailed-container">
                    <div>
                        <img src={image} />
                    </div>
                    <div className="detailed-container-desc">
                        <h1>{title}</h1>
                        <h2>
                            <a>$ {price}</a>
                        </h2>
                        <h3>{category}</h3>
                        <p>{description}</p>

                        <Button variant="contained" className="login-btn" style={{ color: "white", backgroundColor: "black" }} onClick={() => add(product)}>Add to Cart</Button>

                    </div>

                </div>



            }
        </div>
    )
}

export default ProductDetails;