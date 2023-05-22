import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedProducts,
    removeSelectedProducts,
    addToCart,
} from "../redux/actions/productActions";
import "../styles/Styles.css";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Button, Col } from "react-bootstrap";


const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, description, category, rating, rate } = product;
    const { productID } = useParams();
    const dispatch = useDispatch();

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const fetchProductsDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productID}`)
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(selectedProducts(response.data));
    };

    useEffect(() => {
        if (productID && productID !== "") fetchProductsDetail();
        return () => {
            dispatch(removeSelectedProducts());
        };
    }, [productID]);

    const add = (e) => {
        dispatch(addToCart(e));
        setIsAddedToCart(true);
    };

    return (
        <div className="detailed-container">
            {Object.keys(product).length === 0 ? (
                <div>
                    <Box sx={{ display: "flex", marginTop: "200px" }}>
                        <CircularProgress />
                    </Box>
                </div>
            ) : (
                <div className="detailed-container">
                    <div>
                        <img src={image} alt={title} />
                    </div>
                    <Col sm={1}>
                        <div className="vl"></div>
                    </Col>
                    <div className="detailed-container-desc">
                        <h1>{title}</h1>
                        <h2>
                            <a>$ {price}</a>
                        </h2>
                        <h3>
                            {category}
                            <span
                                style={{
                                    marginLeft: "1rem",
                                    backgroundColor: "green",
                                    color: "white",
                                    padding: "1px 7px",
                                    borderRadius: "15px",
                                    fontSize: "18px",
                                }}
                            >
                                {rating.rate}
                                <StarRateIcon style={{ marginBottom: "7px" }} />
                            </span>
                        </h3>
                        <p>{description}</p>

                        <Button
                            variant="contained"
                            className="login-btn"
                            style={{ color: "white", backgroundColor: "black" }}
                            onClick={() => add(product)}
                            disabled={isAddedToCart}
                        >
                            {isAddedToCart ? "Added" : "Add to Cart"}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
