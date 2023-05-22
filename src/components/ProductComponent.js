import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const ProductComponent = ({ setToken }) => {
    const products = useSelector((state) => state.allProducts.products);
    const [searchQuery, setSearchQuery] = useState("");


    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    const renderList = filteredProducts.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <>{Object.keys(products).length === 0 ? (
                <div>
                    <Box sx={{ display: "flex", marginTop: "500px" }}>
                        <CircularProgress />
                    </Box>
                </div>
            ) : (
                <div className="card" key={id}>
                    <Link to={`/product/${id}`}>
                        <div>
                            <img src={image} alt="#" />
                        </div>
                        <hr style={{ marginTop: "2rem" }} />
                    </Link>
                    <div className="card-description">
                        <h5>{title}</h5>
                        <div>
                            <span style={{ fontWeight: "700" }}>Price:</span>
                            <span
                                style={{
                                    color: "green",
                                    fontWeight: "700",
                                    marginLeft: "5px",
                                }}
                            >{`$${price}`}</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: "700", color: "red" }}>
                                Category:
                            </span>
                            <span
                                style={{
                                    color: "blue",
                                    fontWeight: "600",
                                    marginLeft: "5px",
                                }}
                            >{`${category}`}</span>
                        </div>
                    </div>
                </div>
            )}
            </>
        );
    });

    return (
        <>
            <Header handleSearch={handleSearch} setToken={setToken} />
            {renderList}

        </>
    );
};

export default ProductComponent;
